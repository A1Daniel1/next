import React from "react";
import Link from "next/link";

function Navigator() {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-xl">
                        Climate App
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                        <Link href="/about" className="text-white hover:text-gray-400">about</Link>
                        <Link href="/service" className="text-white hover:text-gray-400">service</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Navigator