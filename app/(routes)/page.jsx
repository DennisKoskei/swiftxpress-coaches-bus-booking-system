import Image from "next/image";
import Link from "next/link";
import React from "react";

const Homepage = () => {
    return (
        <div className="px-10 flex flex-col">
            <div className="flex-col h-80 py-40 bg-green-300">
                <div className="flex justify-around">
                    <div className="bg-white rounded-full p-1">
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
                    <div className="relative bg-blue-400 justify-center rounded-xl w-9/12 h-96">
                        Big image
                        <div className="absolute bg-blue-400 -right-1/3 inset-y-16 rounded-xl h-2/3 w-2/3 border-white border-4">
                            {" "}
                            Small image
                        </div>
                        <div className="absolute bottom-4 left-4 font-extrabold flex-col  rounded-lg py-2 px-4 border-1 border-slate-400 bg-white align">
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

            <div className="Download_App flex-row py-10 gap-2">
                <div className="w-1/2">
                    <Image
                        src=""
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <div className="w-1/2 flex-col gap-4">
                    <h1 className="pb-4 font-semibold text-2xl">
                        Download SwiftXpress App
                    </h1>
                    <h1 className="font-bold text-4xl pb-4 pr-20 mr-20">
                        Find a Bus Charter Near You with our App
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae atque ea veritatis porro rem odit labore in
                        deserunt. Inventore quis voluptatum earum.
                    </p>
                    <div className="flex-row mt-4">
                        <Image
                            className="bg-slate-800"
                            src=""
                            width={170}
                            height={45}
                            alt="Download on the App Store"
                        />
                        <Image
                            src="/public/Assets/google-play-png-logo-3799"
                            width={170}
                            height={45}
                            alt="Get it on the PlayStore"
                        />
                    </div>
                </div>
            </div>

            <div className="Other">Other</div>
        </div>
    );
};

export default Homepage;
