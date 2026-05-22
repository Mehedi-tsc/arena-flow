import React from 'react';

const EmptyBooking = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
                Your booking store is empty
            </h2>

            <p className="text-gray-500 mt-2">
                Book to get started.
            </p>
        </div>
    );
};

export default EmptyBooking;