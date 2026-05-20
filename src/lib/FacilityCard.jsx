'use client'
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { authClient } from "./auth-client";


const FacilityCard = ({ facility }) => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    
    return (
        <div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 lg:h-130 ">

                {/* Image */}
                <div className="relative">
                   <Image
                   className="h-65 w-full"
                   src={facility.image}
                   alt={facility.facilityName}
                   width={400}
                   height={300}
                   />

                    {/* Facility Type */}
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {facility.facilityType}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">

                    {/* Facility Name */}
                    <h2 className="text-2xl font-bold text-gray-800 line-clamp-1 ">
                        {facility.facilityName}
                    </h2>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-green-600">
                            ${facility.price}
                        </p>

                        <p className="text-sm text-gray-500">
                            Per Hour
                        </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span><FaLocationDot /></span>
                        <p>{facility.location}</p>
                    </div>

                    {/* Time Slot */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <span><MdWatchLater /></span>
                        <p>{facility.timeSlot}</p>
                    </div>

                    {/* Button */}
                    {user?<Link href={'/'}><button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300">
                        Book Now
                    </button></Link> : <Link href={'/login'}><button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-300">
                        Book Now
                    </button></Link>}
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;