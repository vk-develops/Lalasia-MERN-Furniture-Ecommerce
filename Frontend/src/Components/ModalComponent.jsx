import React from "react";

const ModalComponent = ({ onCloseModal, product }) => {
    const { id, name } = product;

    const handleProductDelete = async () => {
        try {
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section
            style={{
                backgroundColor: "rgb(148, 163, 184, .8)",
                backdropFilter: blur("200px"),
            }}
            className="w-full h-screen fixed top-0 left-0 z-0 overflow-y-hidden"
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-36 bg-white p-12">
                <div className="relative">
                    <button
                        onClick={onCloseModal}
                        className="absolute -top-5 right-0"
                    >
                        <IoClose size={24} />
                    </button>
                </div>
                <h1 className="font-bold text-2xl text-slate-800">
                    Confirm Deletion
                </h1>
                <p className="font-medium text-base text-slate-600 pt-3">
                    Are you sure, do you want to delete the user{" "}
                    <span className="text-yellow-600 font-bold capitalize">
                        "{name}"
                    </span>{" "}
                    and ID:
                    <span className="text-yellow-600 font-bold capitalize">
                        "{id}"
                    </span>{" "}
                    . Once you deleted you cannot revert your action, make sure
                    before deleting a user
                </p>
                <div className="flex items-center justify-end mt-10 gap-4">
                    <button
                        onClick={onCloseModal}
                        className="px-8 py-2 bg-slate-500 rounded-md text-base font-medium text-white"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleProductDelete}
                        className="px-8 py-2 bg-teal-500 rounded-md text-base font-medium text-white"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ModalComponent;
