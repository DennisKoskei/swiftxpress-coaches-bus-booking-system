import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="mt-auto bottom-0 w-full bg-green-500 pb-20 ">
            <footer className="container mx-auto my-8 py-5 flex flex-row gap-2 bg-green-200">
                <div className="flex flex-col w-1/4 bg-cyan-500 ">
                    <div className="flex flex-row py-4 gap-4 items-center">
                        <Image
                            className="rounded-xl "
                            src="/Assets/Eren Yaeger- Screenshot.png"
                            width={50}
                            height={50}
                        />
                        <h1 className="font-bold text-xl ">SwiftXpress</h1>
                    </div>
                    <p className="text-sm w-full">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Culpa assumenda incidunt amet officiis similique
                        repellendus.
                    </p>
                </div>
                <div className="w-1/4">
                    <h1>Quick Links</h1>
                    <ul>
                        <li>
                            <Link href="/about">About us</Link>
                        </li>
                        <li>
                            <Link href="/about">About Them</Link>
                        </li>
                        <li>
                            <Link href="/about">About us</Link>
                        </li>
                        <li>
                            <Link href="/about">About us</Link>
                        </li>
                        <li>
                            <Link href="/about">About us</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-1/4">test</div>
                <div className="w-1/4 bg-green-600">test</div>
            </footer>
        </div>
    );
};

export default Footer;
