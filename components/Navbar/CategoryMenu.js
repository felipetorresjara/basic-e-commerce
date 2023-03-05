import { ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function CategoryMenu({categories}){
    return(
        <>
            <div className='absolute top-10 h-max bg-white w-full inset-0 text-black pb-2 rounded-b drop-shadow-xl'>
                {
                    Object.keys(categories).map((key, index) => 
                        <div key={categories[key]}>
                            <div
                                className={`px-4 py-1 flex justify-between hover:text-white betterhover:cursor-pointer hover:bg-secondary border-bottom ${index !== Object.keys(categories).length -1 && 'border-b border-gray-300'}`}
                            >
                                <p>
                                    {categories[key]}
                                </p>
                                <ChevronRightIcon className="h-6 w-6 m-0 cursor-pointer"/>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}