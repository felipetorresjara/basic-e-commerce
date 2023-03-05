import { ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useEffect } from "react";

export default function CategoryMenuMobile(props){
    const { openCatMenu, setOpenCatMenu, categories, menuRef} = props;
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)){
                setOpenCatMenu(false)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
    return(
        <>
            <div
                className={`${openCatMenu ? 'w-72 py-4' : 'w-0'} top-16 transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed z-50 left-0`}
            >
                <p className='text-lg font-semibold pb-4 px-4'>
                    Categorías
                </p>
                {
                    Object.keys(categories).map((key, index) => 
                        <Link href={`/listing?category=${key}`} key={categories[key]}>
                            <div
                                className={`py-2 px-4 flex justify-between hover:text-white betterhover:cursor-pointer hover:bg-secondary`}
                                onClick={() => setOpenCatMenu(false)}
                            >
                                <p className='text-base'>
                                    {categories[key]}
                                </p>
                                <ChevronRightIcon className="h-6 w-6 m-0 cursor-pointer"/>
                            </div>
                        </Link>
                    )
                }
            </div>
            {openCatMenu &&
                <>
                    <div
                        className='w-full absolute z-30 bg-black opacity-40 h-screen top-16'
                        onClick={()=> setOpenCatMenu(false)}
                    />
                </>    
            }
        </>
    )
}