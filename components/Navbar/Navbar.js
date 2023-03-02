import { SearchIcon, MenuIcon, ChevronDownIcon, ChevronRightIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { categories, contentMenu, popularGames } from '../../lib/consts'
import MenuContent from './MenuContent'

export default function NavBar() {
    const router = useRouter()
    const [query, setQuery] = useState(router.query.search)
    const [open, setOpen] = useState({open: false})
    const handleClick = (e) => {
        if(e.keyCode === 13){
            e.target.value !== '' ?
                router.push(`/listing?search=${e.target.value}`)
            :
                router.push('/listing')
        }
    }

    const handleNavigation = (type) =>{
        open.type == type ?
            setOpen({open:!open.open, type: !open.open ? type : undefined})
        :
            setOpen({open:true, type:type})
    }
    return(
        <header className='sticky top-0 z-50 bg-background'>
            <div className='max-w-page m-auto'>
                <div className="w-full flex gap-2 py-4">
                    <Link href="/" legacyBehavior>
                        <a className='cursor-none'>
                            <div className="text-white text-5xl pl-2 betterhover:hover:cursor-pointer">
                                Logo
                            </div>
                        </a>
                    </Link>
                    <div className='grid grid-cols-12 w-full pl-4'>
                        <div className="mobile:col-span-6 desktop:col-span-7">
                            <div className="flex items-center justify-between border border-white rounded-full pl-2 py-2">
                                <input
                                    className="w-11/12 outline-none bg-transparent text-white placeholder-white"
                                    placeholder="Buscar.."
                                    value={query}
                                    onChange={event => setQuery(event.target.value)}
                                    onKeyDown={event => handleClick(event)}
                                />
                                <SearchIcon 
                                    className="text-white h-6 w-6 mr-4 cursor-pointer"
                                    onClick={() => router.push(`/listing${query !== undefined ? `?search=${query}` : ''}`)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='h-12 bg-white flex relative px-2 pt-2'>
                <div className='max-w-page m-auto flex w-full items-center h-full'>
                    <div className='relative w-1/6'>
                        <div
                            onClick={()=> handleNavigation('category')}
                            className='bg-secondary text-white flex p-2 w-full items-center h-10 rounded-t betterhover:cursor-pointer'
                        >
                            <MenuIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                            <div className='text-white'>Categorias</div>
                        
                        </div>
                        {open.open && open.type === 'category' &&
                        <div className='absolute top-10 h-max bg-white w-full inset-0 text-black py-2 rounded-b drop-shadow-xl'>
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
                    }
                    </div>
                    <div
                        onClick={()=> handleNavigation('psn')}
                        className={`text-center h-full flex items-center px-4 betterhover:cursor-pointer ${open.type === 'psn' && "border-b-4 border-secondary"}`}
                    >
                        PSN
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    <div 
                        onClick={()=> handleNavigation('xbox')}
                        className={`text-center h-full flex items-center px-4 betterhover:cursor-pointer ${open.type === 'xbox' && "border-b-4 border-secondary"}`}
                        >
                        XBOX
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    <div
                        onClick={()=> handleNavigation('nintendo')}
                        className={`text-center h-full flex items-center px-4 betterhover:cursor-pointer ${open.type === 'nintendo' && "border-b-4 border-secondary"}`}
                    >
                        NINTENDO
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    <div
                        onClick={()=> handleNavigation('about')}
                        className={`text-center h-full flex items-center ${open.type === 'about' && "border-b-4 border-secondary"} px-4 betterhover:cursor-pointer`}
                    >
                        Acerca de
                    </div>
                    {open.open && open.type !== 'about' && open.type !== 'category'  &&
                        <MenuContent
                            popularGames={contentMenu[open.type].topGames}
                            topCategories={contentMenu[open.type].topCategories}
                            logo={contentMenu[open.type].logo}
                        />
                    }
                </div>
            </nav>
        </header>
    )
}