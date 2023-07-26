import React from "react";

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
                            <a href="#" class="text-white hover:text-gray-400">Inicio</a>
                            <a href="#" class="text-white hover:text-gray-400">Acerca de</a>
                            <a href="#" class="text-white hover:text-gray-400">Servicios</a>
                            <a href="#" class="text-white hover:text-gray-400">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Navigator