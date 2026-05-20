import FacilityCard from "@/lib/FacilityCard";
import FacilityDetailsCard from "@/lib/FacilityDetailsCard";




const FacilityDetails = async({params}) => {
    const {id} = await params
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility/${id}`)
    const facility = await res.json()
    
    return (
        <div>
            <FacilityDetailsCard facility={facility}/>
        </div>
    );
};

export default FacilityDetails;