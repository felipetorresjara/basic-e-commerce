import React from "react";

export default function Footer(){
    return(
        <footer className="bg-hoverbg h-96 grid grid-cols-4 text-white px-8 py-8 mt-4">
            <div>
                <p className="text-lg font-semibold pb-2">
                    Acerca de nosotros
                </p>
                <p className="text-base">
                    Somos una pagina dedicada a que puedas comprar tus juegos favoritos al precio más barato, de manera que puedas ahorrar
                </p>
            </div>
        </footer>
    )
}