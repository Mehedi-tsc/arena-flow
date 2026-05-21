'use client'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const Search = () => {
    const searchParams = useSearchParams()
    const [search, setSearch] = useState("")
    const router = useRouter()

    

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set("search", search)
        } else {
            params.delete("search")
        }

        router.push(`/all-facilities?${params.toString()}`)
    }

    return (
        <div className="flex items-center gap-2">

            <input
                type="text"
                placeholder="Search facility..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={handleSearch}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition"
            >
                Search
            </button>

        </div>
    );
};

export default Search;