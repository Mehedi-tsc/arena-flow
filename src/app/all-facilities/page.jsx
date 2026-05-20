import FacilityCard from "@/lib/FacilityCard";


const AllFacilitiesPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities`)
    const facilities =await res.json()
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <h2 className="font-bold text-3xl">All Facilities</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {facilities.map(facility=><FacilityCard key={facility._id} facility={facility}></FacilityCard>)}
            </div>

        </div>
    );
};

export default AllFacilitiesPage;