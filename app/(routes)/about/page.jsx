import React from "react";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col">
            <div className="Header h-5 bg-slate-400 px-16">Header</div>

            <div className="About_us h-52 px-16">Top Section for image</div>

            <div className="flex bg-slate-400 px-16 flex-row gap-2">
                <div className="Our_Story w-1/2 bg-slate-300 p-4 border-2 rounded-lg border-slate-300 my-5">
                    <h1>About us</h1>
                    <div className="flex flex-wrap ">
                        <p className="w-full my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto sed est autem dolor asperiores!
                            Velit quis quibusdam perspiciatis officiis aut.
                            Ratione earum deserunt accusantium quidem
                            consequatur fugiat nesciunt cumque praesentium non
                            suscipit, expedita repudiandae incidunt excepturi
                        </p>
                        <p className="w-1/2  pr-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Error, deleniti. For this kind of text to be
                            done in the right way just like the rest of them.
                        </p>
                        <p className="w-1/2 ">
                            This is some random text about this company and what
                            it does and how it has survived the markets we can
                            guarantee that. to completion of the job.
                        </p>
                    </div>
                </div>
                <div className="Our_Story w-1/2  p-4 bg-slate-50 border-2 rounded-lg border-slate-300 my-5">
                    <h1>Our Story</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto sed est autem dolor asperiores! Velit quis
                        quibusdam perspiciatis officiis aut. Ratione earum
                        deserunt accusantium quidem consequatur fugiat nesciunt
                        cumque praesentium non suscipit, expedita repudiandae
                        incidunt excepturi facere cupiditate hic pariatur ipsa
                        porro. Debitis adipisci soluta reprehenderit culpa vel
                        delectus perferendis.
                    </p>
                </div>
            </div>

            <div className="py-4 bg-slate-300 px-16 flex">
                <div className="flex py-8 bg-slate-400 flex-col w-1/2 gap-4">
                    <div className="w-full">
                        <h1 className=" text-center font-black text-2xl">
                            {" "}
                            Our Team
                        </h1>
                    </div>
                    <div className="bg-slate-400 items-center flex-row flex-nowrap">
                        <div className="w-1/3 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                            <img
                                className="w-full h-10 "
                                src=""
                                alt="team image"
                            />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="w-1/3 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint iste dolore dolor corrupti, quasi at
                            laudantium similique accusantium ullam quis commodi
                            id ab vitae in temporibus eligendi iure quam nam?
                            Optio porro vel pariatur magni delectus, excepturi
                            illo?
                        </div>
                        <div className="w-1/3 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint iste dolore dolor corrupti, quasi at
                            laudantium similique accusantium ullam quis commodi
                            id ab vitae in temporibus eligendi iure quam nam?
                            Optio porro vel pariatur magni delectus, excepturi
                            illo?
                        </div>
                    </div>
                </div>
            </div>

            <div className="Our_values flex-col px-16 py-8">
                <div className="Our_values flex-col text-center text-2xl my-4 py-4 gap-y-4">
                    <h1 className="w-full">Our Values</h1>
                    <p className="w-full">
                        We are build on a strong and principled foundation based
                        on values and other stuff.
                    </p>
                </div>
                <div className="flex-row gap-x-4">
                    <div className="w-1/4 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iste dolore dolor corrupti, quasi at laudantium
                        similique accusantium ullam quis commodi id ab vitae in
                        temporibus eligendi iure quam nam? Optio porro vel
                        pariatur magni delectus, excepturi illo?
                    </div>
                    <div className="w-1/4 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iste dolore dolor corrupti, quasi at laudantium
                        similique accusantium ullam quis commodi id ab vitae in
                        temporibus eligendi iure quam nam? Optio porro vel
                        pariatur magni delectus, excepturi illo?
                    </div>
                    <div className="w-1/4 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iste dolore dolor corrupti, quasi at laudantium
                        similique accusantium ullam quis commodi id ab vitae in
                        temporibus eligendi iure quam nam? Optio porro vel
                        pariatur magni delectus, excepturi illo?
                    </div>
                    <div className="w-1/4 justify-between rounded-md border-slate-50 border-2 mx-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint iste dolore dolor corrupti, quasi at laudantium
                        similique accusantium ullam quis commodi id ab vitae in
                        temporibus eligendi iure quam nam? Optio porro vel
                        pariatur magni delectus, excepturi illo?
                    </div>
                </div>
            </div>

            <div className="Contact_info flex flex-col bg-lime-400 px-16 py-8">
                <div className="w-1/2">
                    <h1>Contact Information</h1>
                </div>
                <div className="flex w-full">
                    <div className="flex w-1/2">
                        <form action="" className="flex flex-wrap">
                            <input
                                className="w-1/2 pl-2 my-4 space-x-2 rounded-md justify-between border-slate-500 border-2 "
                                type="text"
                                name="text"
                                id="fullName"
                                placeholder="full name"
                            />
                            <input
                                className="w-1/2 pl-2 my-4 space-x-2 rounded-md justify-between border-slate-500 border-2 "
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                            />
                            <textarea
                                className="w-full space-x-2 rounded-xl border-slate-500 border-3	"
                                name="textarea"
                                id=""
                                cols="20"
                                rows="10"
                                placeholder="Enter message..."
                            />
                            <button
                                className="rounded-md border-2 border-slate-400 bg-slate-900 text-white py-1 px-3 mt-2"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col bg-lime-400 px-16 py-8">
                        <div className="">
                            <h1>Contact numbers and stuff</h1>
                        </div>
                        <div className="justify-items-end w-full">
                            <p>contact info</p>
                            <p>contact info</p>
                            <p>contact info</p>
                            <p>contact info</p>
                            <p>contact info</p>
                            <p>contact info</p>
                        </div>
                        <div className="w-full">
                            <h2>Subscribe to our Newsletter</h2>
                            <input
                                className="w-1/2 pl-2 my-4 space-x-2 rounded-md justify-between border-slate-500 border-2 "
                                type="text"
                                name="text"
                                id="fullName"
                                placeholder="full name"
                            />
                            <button
                                className="rounded-md border-2 border-slate-400 bg-slate-900 text-white py-1 px-3 mt-2"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
