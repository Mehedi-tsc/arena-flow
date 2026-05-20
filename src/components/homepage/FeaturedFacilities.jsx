import FacilityCard from "@/lib/FacilityCard";


const FeaturedFacilities = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/FeaturedFacilities`)
    const facilities = await res.json()
    return (
        <div className="py-20 bg-gray-100">
            <div className='max-w-7xl mx-auto'>
                <h2 className="font-bold text-3xl text-center mb-10">Featured Facilities</h2>
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {facilities.map(facility => <FacilityCard key={facility._id} facility={facility}></FacilityCard>)}
                </div>

            </div>
        </div>
    );
};

export default FeaturedFacilities;