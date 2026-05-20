

import { DeleteFacilities } from "@/components/DeleteFacilities";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";



const ManageFacilities = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const email = session?.user?.email

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${email}`)
    const facilities = await res.json()
    

    return (
        <div className="py-20 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-black">
                        Manage My Facilities
                    </h2>

                    <p className="text-gray-600 mt-3">
                        Manage, edit, and delete your sports facilities.
                    </p>
                </div>

                {/* Cards */}
                <div className="space-y-8">
                    {facilities.map((facility) => (
                        <div
                            key={facility._id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row"
                        >

                            {/* Image */}
                            <div className="relative w-full lg:w-80 h-60">
                                <Image
                                    className="h-full w-full"
                                    src={facility.image}
                                    alt={facility.facilityName}
                                    width={300}
                                    height={300}
                                    
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                                {/* Facility Info */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-black">
                                            {facility.facilityName}
                                        </h3>

                                        <span className="inline-block mt-3 bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold">
                                            {facility.facilityType}
                                        </span>
                                    </div>

                                    

                                    <div className="space-y-2 text-gray-700">
                                        <p>
                                            <span className="font-semibold">
                                                Location:
                                            </span>{" "}
                                            {facility.location}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Capacity:
                                            </span>{" "}
                                            {facility.capacity} People
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Time Slot:
                                            </span>{" "}
                                            {facility.timeSlot}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Price:
                                            </span>{" "}
                                            ${facility.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-4">
                                    <button className="bg-green-500 hover:bg-green-600 transition duration-300 text-white px-8 py-4 rounded-2xl font-semibold">
                                        Edit
                                    </button>

                                    <DeleteFacilities facility={facility}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ManageFacilities;