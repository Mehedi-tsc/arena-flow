import Filter from "@/components/Filter";
import Search from "@/components/Search";
import FacilityCard from "@/lib/FacilityCard";


const AllFacilitiesPage = async ({searchParams}) => {
    const resolvedParams = await searchParams;
    const search = resolvedParams?.search || "";
    const filter = resolvedParams?.filter || "";
    
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities?search=${search}&filter=${filter}`, 
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
                    <Filter/>

                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)}
            </div>

        </div>
    );
};

export default AllFacilitiesPage;