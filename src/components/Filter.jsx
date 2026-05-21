'use client'

import { useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    
    const router = useRouter()
    const searchParams = useSearchParams()
    const handleFilter = (e) => {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value) {
            params.set("filter", e.target.value)
        } else {
            params.delete("filter")
        }
        router.push(`/all-facilities?${params.toString()}`)
    }
    return (
        <select
            
            onChange={handleFilter}
            defaultValue={searchParams.get("filter") || ""}
            className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        >
            <option value="">All Sports</option>
            <option value="Football">Football</option>
            <option value="Cricket">Cricket</option>
            <option value="Swimming">Swimming</option>
            <option value="Badminton">Badminton</option>
            <option value="Rowing">Rowing</option>
            <option value="Golf">Golf</option>
            <option value="Cycling">Cycling</option>
            <option value="Tennis">Tennis</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Basketball">Basketball</option>
        </select>
    );
};

export default Filter;