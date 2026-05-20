"use client";

import Image from "next/image";

const FacilityBookingCard = ({facility}) => {
 

  return (
    <div className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
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

            <form className="space-y-6">
              
              {/* Facility Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Facility Name
                </label>

                <input
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
                  type="number"
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
                  type="text"
                  value={`$${facility.price}`}
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