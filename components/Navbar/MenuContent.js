import Link from "next/link";
import React from "react";

export default function MenuContent(props){
    const { popularGames, topCategories, logo} = props
    return(
        <div className='absolute top-10 h-52 bg-white w-full inset-0 border-t-2 drop-shadow-xl px-2'>
            <div className='max-w-page m-auto flex'>
                <div className='pr-24'>
                    <p className='font-semibold'>
                        Juegos populares
                    </p>
                    {
                        popularGames.map((game, index)=>
                            <Link href={`/product/${game.id}`} legacyBehavior>
                                <a className='block py-1 betterhover:hover:text-secondary'>
                                {game.name}
                                </a>
                            </Link>
                        )
                    }
                </div>
                <div className='pr-24'>
                    <p className='font-semibold'>
                        Top generos
                    </p>
                    {
                        Object.keys(topCategories).slice(0,5).map((key, index)=>
                            <Link href={`/listing?category=${key}`} legacyBehavior>
                                <a className='block py-1 betterhover:hover:text-secondary'>
                                {topCategories[key]}
                                </a>
                            </Link>
                        )
                    }
                </div>
                <div className='pr-24'>
                    <p className='font-semibold'>
                        Top generos
                    </p>
                    {
                        Object.keys(topCategories).slice(0,5).map((key, index)=>
                            <Link href={`/listing?category=${key}`} legacyBehavior>
                                <a className='block py-1 betterhover:hover:text-secondary'>
                                {topCategories[key]}
                                </a>
                            </Link>
                        )
                    }
                </div>
                <div className='flex items-center'>
                    <img
                        className='h-24'
                        src={logo}
                    />
                </div>
            </div>
        </div>
    )
}