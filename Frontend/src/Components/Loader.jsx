import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <section
            style={{
                backgroundColor: "rgb(235, 235, 235, .5)",
                backdropFilter: blur("200px"),
            }}
            className="w-full h-screen fixed top-0 left-0 z-0 overflow-y-hidden"
        >
            <div className="absolute top-1/2 left-2/4 transform -translate-x-2/4 -translate-y-1/2 bg-white p-12">
                <div className="relative ">
                    <Triangle
                        visible={true}
                        height="100"
                        width="100"
                        color="#518581"
                        ariaLabel="triangle-loading"
                    />
                </div>
            </div>
        </section>
    );
};

export default Loader;
