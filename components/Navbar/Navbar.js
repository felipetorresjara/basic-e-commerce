import { SearchIcon, MenuIcon, ChevronDownIcon, UserCircleIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { categories, contentMenu } from '../../lib/consts'
import CategoryMenu from './CategoryMenu'
import MenuContent from './MenuContent'
import STORELOGO from '../../public/images/logos/store-logo.png'
import CategoryMenuMobile from './CategoryMenuMobile'

export default function NavBar() {
    const router = useRouter()
    const [query, setQuery] = useState(router.query.search)
    const [open, setOpen] = useState({open: false})
    const [openCatMenu, setOpenCatMenu] = useState(false)
    const menuRef = useRef(null)
    const hoverMenuRef = useRef(null)

    useEffect(
        () => {
          const listener = (event) => {
            if (hoverMenuRef.current && !hoverMenuRef.current.contains(event.target)) {
              setOpen({open:false});
            }
          };
          document.addEventListener("mouseover", listener);
          return () => {
            document.removeEventListener("mouseout", listener);
          };
        },
        [hoverMenuRef]
    );

    const handleClick = (e) => {
        if(e.keyCode === 13){
            e.target.value !== '' ?
                router.push(`/listing?search=${e.target.value}`)
            :
                router.push('/listing')
        }
    }

    const handleNavigation = (type) =>{
            setOpen({open:true, type:type})
    }
 
    return(
        <header className='sticky top-0 z-50 bg-background border-b border-b-black drop-shadow-lg'>
            <div className='max-w-page mobile:h-16 desktop:h-20 m-auto relative'>
                <div className="w-full flex items-center gap-2 py-2 px-4">
                    <div ref={menuRef}>
                        <MenuIcon
                            className="desktop:hidden h-8 w-8 mr-4 cursor-pointer text-white"
                            onClick={()=> setOpenCatMenu(!openCatMenu)}
                        />
                        <CategoryMenuMobile
                            openCatMenu={openCatMenu}
                            setOpenCatMenu={setOpenCatMenu}
                            categories={categories}
                            menuRef={menuRef}
                        />
                    </div>                
                    <Link href="/" legacyBehavior>
                        <a className='cursor-none'>
                            <img
                                src={STORELOGO.src}
                                className="betterhover:hover:cursor-pointer mobile:h-14 mobile:w-16 desktop:w-24 desktop:h-16 object-contain"
                            />
                        </a>
                    </Link>
                    <div className='grid grid-cols-12 w-full pl-4'>
                        <div className="mobile:col-span-10 tablet:col-span-7">
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
                        <div className='col-span-2 tablet:col-span-5 flex justify-end items-center'>
                            <UserCircleIcon className="h-10 w-10 ml-2  cursor-pointer text-white"/>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='hidden h-10 bg-white desktop:flex relative px-2'>
                <div ref={hoverMenuRef} className='max-w-page w-max flex items-center h-full'>
                    <div className='relative h-full'>
                        <div
                            onMouseOver={()=> handleNavigation('category')}
                            className={`text-center h-full flex items-center px-4 m-0 betterhover:cursor-pointer ${open.type === 'category' && "border-b-4 border-secondary"}`}

                        >
                            <div>Categorias</div>
                            <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                        
                        </div>
                        {open.open && open.type === 'category' &&
                            <CategoryMenu categories={categories}/>
                    }
                    </div>
                    <div
                        onMouseOver={()=> handleNavigation('psn')}
                        className={`text-center h-full flex items-center px-4 m-0 betterhover:cursor-pointer ${open.type === 'psn' && "border-b-4 border-secondary"}`}
                    >
                        PSN
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    <div 
                        onMouseOver={()=> handleNavigation('xbox')}
                        className={`text-center h-full flex items-center px-4 m-0 betterhover:cursor-pointer ${open.type === 'xbox' && "border-b-4 border-secondary"}`}
                        >
                        XBOX
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    <div
                        onMouseOver={()=> handleNavigation('nintendo')}
                        className={`text-center h-full flex items-center px-4 m-0 betterhover:cursor-pointer ${open.type === 'nintendo' && "border-b-4 bg-seco border-secondary"}`}
                    >
                        NINTENDO
                        <ChevronDownIcon className="h-6 w-6 mr-4 cursor-pointer"/>
                    </div>
                    {open.open && open.type !== 'category'  &&
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