import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row py-4 px-11 bg-green-500 gap-2">
            <div className="w-1/2 flex-row font-extrabold text-2xl items-center gap-4">
                <Image
                    className="rounded-full"
                    src="/Assets/Eren Yaeger- Screenshot.png"
                    width={50}
                    height={50}
                />
                <h1>
                    <Link href="/">SwiftXpress</Link>
                </h1>
            </div>
            <div className="w-1/2 flex flex-row items-end justify-end gap-2 pr-8 text-lg font-normal">
                <div className="flex flex-row w-5/6 h-full items-center justify-center ">
                    <ul className="flex-row gap-4 pr-2">
                        <li>
                            <Link href="/about"> About Us</Link>
                        </li>
                        <li>
                            <Link href="/about"> About </Link>
                        </li>
                        <li>
                            <Link href="/about"> About </Link>
                        </li>
                        <li>
                            <Link href="/about"> Contact Us </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row w-1/6 items-center gap-2">
                    <p>p</p>
                    <Image
                        className="rounded-full"
                        src="/Assets/Eren Yaeger- Screenshot.png"
                        width={50}
                        height={50}
                    />
                    <p>p</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
