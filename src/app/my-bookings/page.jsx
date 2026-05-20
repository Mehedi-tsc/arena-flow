

import { BookingCanel } from "@/components/BookingCancel";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";



const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const userId = session?.user?.id
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${userId}`)
    const bookings = await res.json()


    return (
        <div className="py-20 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-black">
                        My Bookings
                    </h2>

                    <p className="text-gray-600 mt-3">
                        Manage your booked sports facilities easily.
                    </p>
                </div>

                {/* Booking Cards */}
                <div className="space-y-8">
                    {bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row"
                        >

                            {/* Image */}
                            <div className="relative w-full lg:w-80">
                                <Image
                                    className="h-full w-full"
                                    src={booking.image}
                                    alt={booking.facilityName}
                                    width={300}
                                    height={300}
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1 p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                                {/* Booking Info */}
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-3xl font-bold text-black">
                                            {booking.facilityName}
                                        </h3>

                                        <span className="inline-block mt-3 bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm font-semibold capitalize">
                                            {booking.status}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-gray-700">
                                        <p>
                                            <span className="font-semibold">
                                                Booking Date: 
                                             </span>{" "}
                                            {booking.bookingDate}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Time Slot: 
                                             </span>{" "}
                                            {booking.timeSlot}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Hours: 
                                             </span> {" "}
                                             {booking.hours} Hours
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Total Price: 
                                            </span>{" "}
                                            {booking.totalPrice}
                                        </p>
                                    </div>
                                </div>

                                {/* Cancel Button */}
                                <div>
                                    <BookingCanel booking={booking}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;