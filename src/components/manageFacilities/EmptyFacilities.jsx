

const EmptyFacilities = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
                You have no facilities to manage
            </h2>

            <p className="text-gray-500 mt-2">
                Add a new facility to get started.
            </p>
        </div>
    );
};

export default EmptyFacilities;