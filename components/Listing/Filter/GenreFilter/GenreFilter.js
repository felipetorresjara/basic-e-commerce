import react from "react";
import { categories } from "../../../../lib/consts";

export default function GenreFilter(props){
    const { router } = props
    const { category } = router.query

    const HandleCategory = (cat) => {
        router.query.category = cat
        router.push({pathname: router.pathname, query: router.query})
    }

    return(
        <div className="pl-5">
            <p className="text-white text-lg font-semibold">
                Genero
            </p>
            <div className="max-h-52 overflow-y-auto">
                {Object.keys(categories).map((cat)=> 
                    <div
                        key={cat}
                        className="flex items-center p-1 rounded betterhover:hover:bg-hoverbg betterhover:cursor-pointer"
                        onClick={()=>HandleCategory(cat)}
                    >
                        <input id="default-checkbox" type="checkbox" checked={category === cat} onChange={()=>{}}  value="" className="w-5 h-5 bg-background rounded border border-primary focus:ring-0 accent-primary text-xs"/>
                        <p className="ml-2 text-base font-medium text-white">{categories[cat]}</p>
                    </div>
                )}
            </div>
        </div>
    )
}