import Link from "next/link";
import React from "react";

const Homepage = () => {
    return (
        <div className="px-8 flex flex-col">
            <div className="Header">Header</div>

            <div className="Top_Section flex-col h-80 py-40 bg-slate-400 -mx-8 ">
                <div className="Search_Bar flex justify-around">
                    <div className="bg-white rounded-full  p-1">
                        <form action="" method="post">
                            <input
                                type="text"
                                name="source"
                                id="source"
                                placeholder="To"
                            />
                            <input
                                type="text"
                                name="destination"
                                id="destination"
                                placeholder="From"
                            />
                            <input
                                type="date"
                                name="travel_date"
                                id="travel_date"
                                placeholder="From"
                            />
                            <button type="submit" class="">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="Popular_Routes py-10 flex-col h-auto">
                <div className="pb-5 font-semibold text-2xl">
                    <h1>Popular Routes</h1>
                </div>
                <div className="flex-row gap-4">
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-52 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                </div>
            </div>

            <div className="Why_Us flex py-8 gap-4 ">
                <div className="w-1/2 flex-col">
                    <h1 className="pb-4 font-semibold text-2xl">
                        Why Choose Us
                    </h1>
                    <h1 className="font-bold text-4xl pb-4">
                        More Than 25 Years We provide Bus Charter Service For
                        You
                    </h1>
                    <div className="pr-20">
                        <p className="pb-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Doloribus, a. Sit ut, placeat voluptatibus
                            eius non, nobis explicabo sintratione provident
                            est.atibus eius non, nobis explicabo sintratione
                            provident est.
                        </p>
                        <div className="flex flex-col">
                            <div className="List_right flex gap-4 justify-between">
                                <ul className="w-1/2 flex-col gap-2">
                                    <li>✅ Brilliant Customer Service</li>
                                    <li>✅ 24/7 Online support</li>
                                    <li>✅ Safety Guarantee</li>
                                    <li>✅ Experienced Drivers</li>
                                </ul>

                                <ul className="w-1/2 flex-col gap-2 mb-4">
                                    <li>
                                        ✅ Brilliant Customer Service in the{" "}
                                    </li>
                                    <li>✅ 24/7 Online support</li>
                                    <li>✅ Safety Guarantee</li>
                                    <li>✅ Experienced Drivers</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-end justify-end">
                                <Link
                                    className="bg-amber-500 py-2 px-4 rounded-xl items-end justify-end"
                                    href={"/about"}
                                >
                                    About us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Right w-1/2 ">
                    <div className="relative justify-center rounded-xl border-slate-800 border-1 w-9/12 h-96 border-2">
                        Big image
                        <div className="absolute rounded-xl w-20 h-20 align-middle border-slate-800 border-2">
                            {" "}
                            Small image
                        </div>
                        <div className="absolute font-extrabold flex-col  rounded-xl py-2 px-4 border-1 border-slate-400 mb-auto bg-white align">
                            <p className="text-center">25+ Years</p>
                            <p>⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Client_Testimonials">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="p-4 font-semibold text-3xl">
                        What Our Clients Say...
                    </h1>
                    <p className="w-3/6 text-center mb-7">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora eius sit molestias, debitis voluptates ullam
                        perferendis aliquid repellendus itaque saepe.
                    </p>
                </div>
                <div className="flex-row gap-4 ">
                    <div className="cards border-2 rounded-xl py-4 px-4 w-1/4 bg-white">
                        <p className="pr-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ducimus, quibusdam. Lorem ipsum dolor sit. 
                        </p>
                        <div className="flex flex-row gap-2 text-sm font-medium items-center mt-2 mb-auto">
                            <div className="h-8 w-8 rounded-full bg-green-400 border-1 border-slate-800 flex-nowrap"></div>
                            <h3>Somet Desink</h3>
                        </div>
                    </div>
                    <div className="cards border-2 rounded-xl py-4 px-4 w-1/4 bg-white">
                        <p className="pr-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ducimus, quibusdam. Lorem ipsum dolor sit.
                        </p>
                        <div className="flex flex-row gap-2 text-sm font-medium items-center">
                            <div className="h-8 w-8 rounded-full bg-green-400 border-1 border-slate-800 flex-nowrap"></div>
                            <h3>Somet Desink</h3>
                        </div>
                    </div>
                    <div className="cards border-2 rounded-xl py-4 px-4 w-1/4 bg-white">
                        <p className="pr-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ducimus, quibusdam. Lorem ipsum dolor sit.
                        </p>
                        <div className="flex flex-row gap-2 text-sm font-medium items-center">
                            <div className="h-8 w-8 rounded-full bg-green-400 border-1 border-slate-800 flex-nowrap"></div>
                            <h3>Somet Desink</h3>
                        </div>
                    </div>
                    <div className="cards border-2 rounded-xl py-4 px-4 w-1/4 bg-white">
                        <p className="pr-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ducimus, quibusdam. Lorem ipsum dolor sit.
                        </p>
                        <div className="flex flex-row gap-2 text-sm font-medium items-center">
                            <div className="h-8 w-8 rounded-full bg-green-400 border-1 border-slate-800 flex-nowrap"></div>
                            <h3>Somet Desink</h3>
                        </div>
                    </div>
                </div>
                <div className="bg-black h-28 -mt-6 -mx-7 flex gap-12 items-center justify-around text-white font-bold text-lg pt-4 ">
                    <p>logo</p>
                    <p>logo</p>
                    <p>logo</p>
                    <p>logo</p>
                </div>
            </div>

            <div className="Popular_Destinations py-10 flex-col h-auto">
                <div className="pb-5 font-semibold text-2xl">
                    <h1>Popular Destinations</h1>
                </div>
                <div className="flex-row gap-4">
                    <div className="cards border-2 rounded-xl h-auto py-2 w-1/3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-1/2 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-1/2 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-1/2 py-2 w-1/3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-1/2 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                    <div className="cards border-2 rounded-xl h-1/2 py-2 w-1/6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus, quibusdam.
                    </div>
                </div>
            </div>

            <div className="Download_App">Download_App</div>

            <div className="Other">Other</div>
        </div>
    );
};

export default Homepage;
