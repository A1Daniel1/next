import React from "react";
import Link from "next/link";

function Navigator() {
    return (
        <>
            <nav class="bg-gray-800 py-4">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center">
                        <div class="text-white font-bold text-xl">
                            Mi Navegador
                        </div>
                        <div class="hidden md:flex space-x-4">
                            <Link href="/" class="text-white hover:text-gray-400">Home</Link>
                            <Link href="/about" class="text-white hover:text-gray-400">about</Link>
                            <Link href="/service" class="text-white hover:text-gray-400">service</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Navigator