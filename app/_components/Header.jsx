import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div>
            <h1>
                <Link href="/">SwiftXpress</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/about"> About </Link>
                </li>
                <li>
                    <Link href="/about"> About </Link>
                </li>
                <li>
                    <Link href="/about"> About </Link>
                </li>
                <li>
                    <Link href="/about"> About </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
