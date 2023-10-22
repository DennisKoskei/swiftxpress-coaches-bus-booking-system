import React from "react";

const LoginPage = () => {
    return (
        <div className="">
            <div className="Heading">Heading</div>

            <div className="container mx-auto h-screen flex-row bg-slate-300">
                <div className="Right flex-col w-1/2 py-10 space-y-4">
                    <h1 className="font-bold text-4xl pb-4">SwiftXpress</h1>
                    <h1 className="pb-4 font-semibold text-2xl pr-20">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vero, voluptatem! Sed enim aspernatur aliquam
                        tempore, quia magni iusto odit. Hic animi inventore
                        aliquid rerum reiciendis repudiandae id veniam eum
                        placeat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione, praesentium.
                    </p>
                    <p className="" >copyright 2023</p>
                </div>
                <div className="Left w-1/2 flex items-center justify-center">
                    <div className="flex-col h-3/4 w-3/5 rounded-3xl bg-green-500 py-10 items-center">
                        <h1 className="pb-4 font-semibold text-2xl text-center py-4">
                            Sign up
                        </h1>
                        <form
                            className="flex flex-col items-center gap-4 px-auto"
                            action=""
                        >
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="first name"
                            />
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="last name"
                            />
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="email"
                            />
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="phone no"
                            />
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="password"
                            />
                            <input
                                className="rounded-xl h-8 w-4/5 px-3"
                                type="text"
                                name=""
                                id=""
                                placeholder="confirm password"
                            />
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
