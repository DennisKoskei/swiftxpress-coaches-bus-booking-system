import React from "react";

const SearchResultsPage = () => {
    return (
        <div>
            <div className="header">header</div>

            <div className="container flex my-20 flex-row justify-between gap-4 p-2 bg-green-400 mx-auto rounded-xl ">
                <div className="w-1/4 p-4 bg-green-900 rounded-xl">
                    <h1 className="text-center font-semibold text-l">
                        Popular Destinations
                    </h1>
                    <div className="bg-green-300 p-4 rounded-xl my-4">
                        <ul>
                            <li>Kigali to Nairobi</li>
                            <li>Kigali to Nairobi</li>
                            <li>Kigali to Nairobi</li>
                            <li>Kigali to Nairobi</li>
                            <li>Kigali to Nairobi</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col w-3/4 px-8 py-4 bg-green-900 rounded-xl">
                    <div className="w-full p-2 bg-red-300 rounded-xl">
                        <h1 className="mt-2 font-bold">Kisumu to Nairobi </h1>
                        <div className="flex flex-row gap-2 bg-yellow-300">
                            <div className="image bg-green-400 h-48 w-48 rounded-xl">
                                {/* <Image src></Image> */}
                                image of bus
                            </div>
                            <div className="flex flex-col w-3/4">
                                <div className="flex font-semibold text-md gap-1">
                                    <div className="w-1/4 mb-4">
                                        <h1>From:</h1>
                                        <h3>Nairobi</h3>
                                        <h1 className="mt-4">Date:</h1>
                                        <h1>01-Sep 2023</h1>
                                    </div>
                                    <div className="w-1/4">
                                        <h1>To:</h1>
                                        <h3>Kericho</h3>
                                        <h1 className="mt-4">Time:</h1>
                                        <h1>13:40 PM</h1>
                                    </div>
                                    <div className="w-1/4 font-bold">
                                        <h1>Available Seats</h1>
                                        <h1 className="text-xl mt-4">45</h1>
                                    </div>
                                    <div className="w-1/4 font-bold bg-purple-500">
                                        <h1>Price</h1>
                                        <p className="text-2xl mt-4">4500 /=</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-end items-end">
                                    <button
                                        className="text-l mb-4 mr-4 font-semibold bg-green-200 rounded-md mt-4 px-6 py-1 border-gray-700 border-2"
                                        type="submit"
                                    >
                                        Book Seat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2 my-4 bg-green-300 rounded-xl">
                        <h1 className="mt-2 font-bold">Kisumu to Nairobi </h1>
                        <div className="flex flex-row gap-2">
                            <div className="image bg-green-400 h-32 w-32 rounded-xl">
                                {/* <Image src></Image> */}
                                image of bus
                            </div>
                            <div className="flex flex-col w-3/4">
                                <div className="flex font-semibold text-md gap-1">
                                    <div className="w-1/4 mb-4">
                                        <h1>From:</h1>
                                        <h3>Nairobi</h3>
                                        <h1 className="mt-4">Date:</h1>
                                        <h1>01-Sep 2023</h1>
                                    </div>
                                    <div className="w-1/4">
                                        <h1>To:</h1>
                                        <h3>Kericho</h3>
                                        <h1 className="mt-4">Time:</h1>
                                        <h1>13:40 PM</h1>
                                    </div>
                                    <div className="w-1/4 font-bold">
                                        <h1>Available Seats</h1>
                                        <h1>45</h1>
                                    </div>
                                    <div className="w-1/4 font-bold">
                                        <h1>Price</h1>
                                        <p>4500 /=</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-end items-end">
                                    <button
                                        className="text-l font-semibold bg-green-200 rounded-md mt-4 px-4 py-1 border-gray-700 border-2"
                                        type="submit"
                                    >
                                        Book Seat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
