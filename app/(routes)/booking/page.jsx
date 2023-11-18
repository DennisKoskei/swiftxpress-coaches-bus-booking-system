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
                        <div className="flex flex-wrap gap-4 w-3/4 bg-green-300 rounded-xl p-2">
                            <h3>Nairobi - Kericho</h3>
                            <h3>Departure</h3>
                            <h3>Arrival</h3>
                            <p>10:00 AM</p>
                            <p>04:00 AM</p>
                            <h3>Price</h3>
                            <p>1500 /=</p>
                        </div>
                    </div>
                    <div className="w-full p-2 mt-4 bg-green-300 rounded-xl">
                        <h1 className="my-4">Booking Submission</h1>
                        <div className="flex flex-col h-40 justify-between">
                            <form action="/" method="post">
                                <div className="flex flex-nowrap gap-2">
                                    <input
                                        type="text"
                                        name=""
                                        readOnly="true"
                                        id="seatId"
                                        defaultValue={"seat"}
                                        cols="5"
                                    />
                                    <input type="text" name="firstName" id="" />
                                    <input type="text" name="LastName" id="" />
                                    <input
                                        type="checkbox"
                                        name="remove"
                                        id="removeBtn"
                                        checked="false"
                                    />
                                </div>
                                <div className="flex gap-2 justify-end justify-items-end">
                                    <h3>Total</h3>
                                    <p className="text-xl font-bold">3000 /=</p>
                                    <button
                                        className="text-l font-semibold bg-green-200 rounded-md mt-4 px-4 py-2"
                                        type="submit"
                                    >
                                        Make Payment
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
