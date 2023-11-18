import React from "react";

const BookingPage = () => {
    return (
        <div>
            <div className="header">header</div>
            <div className="container flex my-20 flex-row justify-between gap-4 p-2 bg-green-400 mx-auto rounded-xl ">
                <div className="w-1/4 p-4 bg-green-900 rounded-xl">
                    <h1 className="text-center font-semibold text-xl">
                        Select Seat
                    </h1>
                    <div className="bg-green-300 p-4 rounded-xl my-4">
                        This is where the user will select the seats that he/she
                        wants
                    </div>
                </div>
                <div className="flex flex-col right w-3/4 px-8 py-4 bg-green-900 rounded-xl">
                    <div className="flex gap-2 justify-between ">
                        <div className="image w-1/4 bg-green-300 rounded-xl">
                            {/* <Image src></Image> */}
                            image of bus
                        </div>
                        <div className="w-3/4 bg-green-300 rounded-xl p-2">
                            Details of the bus such as To, From, Departure time,
                            Price
                        </div>
                    </div>
                    <div className="w-full p-2 mt-4 bg-green-300 rounded-xl">
                        seats selected
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
