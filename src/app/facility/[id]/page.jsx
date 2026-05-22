import { auth } from "@/lib/auth";
import FacilityCard from "@/lib/FacilityCard";
import FacilityDetailsCard from "@/lib/FacilityDetailsCard";
import { headers } from "next/headers";




const FacilityDetails = async({params}) => {
    const {id} = await params
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facility/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    })
    const facility = await res.json()
    
    return (
        <div>
            <FacilityDetailsCard facility={facility}/>
        </div>
    );
};

export default FacilityDetails;