import Search from "@/components/Search";
import FacilityCard from "@/lib/FacilityCard";


const AllFacilitiesPage = async ({searchParams}) => {
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || "";
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities?search=${search}`, 
        {cache: "no-store"}
    )
    const facilities = await res.json()
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                <h1 className="text-3xl font-bold">
                    All Facilities
                </h1>

                <div className="flex flex-col sm:flex-row gap-3">
                    {/* search */}
                    <Search/>

                    {/* Filter */}
                    <select
                        // value={sportType}
                        // onChange={(e) => setSportType(e.target.value)}
                        className="border border-gray-300 rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">All Sports</option>
                        <option value="Football">Football</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Swimming">Swimming</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Rowing">Rowing</option>
                    </select>

                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)}
            </div>

        </div>
    );
};

export default AllFacilitiesPage;