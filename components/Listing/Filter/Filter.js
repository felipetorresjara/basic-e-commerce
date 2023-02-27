import GenreFilter from "./GenreFilter/GenreFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import RetailFilter from "./RetailFilter";


export default function Filter(props){
    const { router, total } = props
    return(
        <>
            <div className="bg-secondary text-white font-bold text-xl w-full px-10 mb-2">
                {total + ' Resultados'}
            </div>
           <PriceFilter router={router}/>
           <hr  className="bg-secondary h-px my-2 border-0"/>
           <GenreFilter router={router} />
           <hr  className="bg-secondary h-px my-2 border-0"/>
           <RetailFilter router={router} />
        </>
    )
}