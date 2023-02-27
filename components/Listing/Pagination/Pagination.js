import { useRouter } from "next/router";
import react from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const BoxPage = ({children, page, actualPage, selectPage}) => {
    return( 
        <div
            onClick={()=> {page !== actualPage && selectPage(page)}}
            className={`p-2 border border-primary ${page === actualPage ? 'text-white bg-primary' :'text-primary'} rounded betterhover:hover:bg-primary betterhover:hover:text-white mx-1 betterhover:cursor-pointer`}
        >
            {children}
        </div>
    )
}

const BoxPageSide = ({children, nextPage, disabled, selectPage}) => {
    return( 
        <div
            onClick={()=> {!disabled && selectPage(nextPage)}}
            className={`p-2 border ${disabled ? 'text-gray-500 border-gray-500 betterhover:cursor-not-allowed' :'text-primary border-primary betterhover:hover:bg-primary betterhover:hover:text-white betterhover:cursor-pointer'} rounded mx-1`}
        >
            {children}
        </div>
    )
}

export default function Pagination(props){
    const { totalPages, page, router } = props
    const getMiddlePages = () =>{
        if(page === 1){
            return [2,3]
        }
        else if(page > 1 && page < totalPages){
            return [page-1, page, page+1]
        }
        else if(page === totalPages){
            return [page -2, page-1]
        }
        return [2,3]
    }
    const selectPage = (pag) =>{
        if(pag !== 1){
            router.query.page = pag
        }
        else{
            delete router.query.page
        }
        router.push({pathname: router.pathname, query: router.query})
    }
    return(
        <nav className="flex w-full justify-center col-span-12 py-4 items-end">
            {totalPages > 1 &&
                <>
                    <BoxPageSide disabled={page===1} nextPage={page-1} selectPage={selectPage}>
                        <ChevronLeftIcon className="h-6 w-6"/>
                    </BoxPageSide>
                    <BoxPage page={1} actualPage={page} selectPage={selectPage}>
                        <div className="h-6 w-6 text-center">
                            1
                        </div>
                    </BoxPage>
                    {page > 3 &&
                        <div className="h-6 w-6 text-primary text-center">
                            ...
                        </div>
                    }
                    {getMiddlePages().map((p)=>{
                        if(p !== 1 && p !== totalPages){
                            return <BoxPage page={p} actualPage={page} selectPage={selectPage} key={p}>
                                <div className="h-6 w-6 text-center">
                                    {p}
                                </div>
                            </BoxPage>
                        }
                    })}
                    {page < totalPages-2 &&
                        <div className="h-6 w-6 text-primary text-center">
                            ...
                        </div>
                    }
                    <BoxPage page={totalPages} actualPage={page} selectPage={selectPage}>
                        <div className="h-6 w-6 text-center">
                            {totalPages}
                        </div>
                    </BoxPage>
                    <BoxPageSide disabled={page===totalPages} nextPage={page+1} selectPage={selectPage}>
                        <ChevronRightIcon className="h-6 w-6" />
                    </BoxPageSide>
                </>
            }
        </nav>
    )
}