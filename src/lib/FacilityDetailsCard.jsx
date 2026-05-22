"use client";


import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";
import { authClient } from "./auth-client";
import { toast } from "react-toastify";

const FacilityBookingCard = ({ facility }) => {
    const { data: session } = authClient.useSession()
    const userId = session?.user?.id
    const [hours, setHours] = useState("")
    const totalPrice = Number(hours || 0) * facility.price

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookingData = { ...Object.fromEntries(formData.entries()), status: "pending", userId: userId, image: facility.image }

        const { data } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${data.token}`

            },
            body: JSON.stringify(bookingData),

        })
        const result = await res.json()
        toast.success('Booing succesfull')
        redirect('/my-bookings')
        return result;
    };


    return (
        <div className="py-20 bg-gray-100 min-h-screen">

            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold mb-5">
                    Facility Details and Booking Form
                </h1>

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                    {/* Left Side - Facility Details */}
                    <div>

                        {/* Image */}
                        <div className="relative h-88">
                            <Image
                                className="h-90 w-full"
                                src={facility.image}
                                alt={facility.facilityName}
                                width={400}
                                height={300}
                            />
                        </div>

                        {/* Details */}
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="text-3xl font-bold text-black">
                                    {facility.facilityName}
                                </h2>

                                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    {facility.facilityType}
                                </span>
                            </div>

                            <p className="text-gray-600 leading-8 mb-6">
                                {facility.description}
                            </p>

                            <div className="space-y-4 text-gray-700">
                                <p>
                                    <span className="font-semibold">Location: </span>
                                    {facility.location}
                                </p>

                                <p>
                                    <span className="font-semibold">Capacity: </span>
                                    {facility.capacity} People
                                </p>

                                <p>
                                    <span className="font-semibold">Available Time: </span>
                                    {facility.timeSlot}
                                </p>

                                <p>
                                    <span className="font-semibold">Price Per Hour: </span>
                                    ${facility.price}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Booking Form */}
                    <div className="p-8 bg-gray-50 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-black mb-8">
                            Booking Form
                        </h2>

                        <form onSubmit={onSubmit} className="space-y-6">

                            {/* Facility Name */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Facility Name
                                </label>

                                <input
                                    name="facilityName"
                                    type="text"
                                    value={facility.facilityName}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none"
                                />
                            </div>

                            {/* Booking Date */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Booking Date
                                </label>

                                <input
                                    name="bookingDate"
                                    type="date"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            {/* Time Slot */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Time Slot
                                </label>

                                <input
                                    name="timeSlot"
                                    type="text"
                                    placeholder={facility.timeSlot}
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            {/* Hours */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Hours
                                </label>

                                <input
                                    name="hours"
                                    type="number"
                                    defaultValue={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                    placeholder="Enter booking hours"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-500"
                                />
                            </div>

                            {/* Total Price */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Total Price
                                </label>

                                <input
                                    name="totalPrice"
                                    type="text"
                                    value={`$${totalPrice}`}
                                    readOnly
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 outline-none"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white py-4 rounded-xl font-semibold text-lg"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityBookingCard;