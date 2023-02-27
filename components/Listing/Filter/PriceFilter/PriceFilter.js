import { useRouter } from "next/router";
import react, { useState } from "react";
import { FormatPrice } from "../../../../lib/utils";

export default function PriceFilter(props){
    const { router } = props
    const [minPrice, setMinPrice] = useState(router.query.minPrice || '')
    const [maxPrice, setMaxPrice] = useState(router.query.maxPrice || '')
    const HandleMinPrice = () => {
        if(minPrice !== ''){
            router.query.minPrice = minPrice
        }
        else{
            delete router.query.minPrice
        }
        router.push({pathname: router.pathname, query: router.query})
    }
    const HandleMaxPrice = () => {
        if(maxPrice !== ''){
            router.query.maxPrice = maxPrice
        }
        else{
            delete router.query.maxPrice
        }
        router.push({pathname: router.pathname, query: router.query})
    }

    return(
        <div className="pl-5">
            <p className="text-white text-lg font-semibold">
                Precio
            </p>
            <div className="grid grid-cols-2 gap-2">
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-white sm:text-sm">$</span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block border bg-inherit w-full border-primary text-white rounded pl-7 pr-1 sm:text-sm focus:outline-0"
                        placeholder="Desde"
                        value={FormatPrice(minPrice)}
                        onChange={e => setMinPrice(e.target.value.replaceAll('.',''))}
                        pattern="[0-9]+"
                        onKeyDown={(e)=>{
                            if (e.key === "Enter") {
                                HandleMinPrice()
                            }
                        }}
                    />
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-white sm:text-sm">$</span>
                    </div>
                    <input
                        type="text"
                        name="max-price"
                        id="max-price"
                        className="block border bg-inherit w-full border-primary text-white rounded pl-7 pr-1 sm:text-sm focus:outline-0"
                        placeholder="Hasta"
                        value={FormatPrice(maxPrice)}
                        pattern="[0-9]+"
                        onChange={e => setMaxPrice(e.target.value.replaceAll('.',''))}
                        onKeyDown={(e)=>{
                            if (e.key === "Enter") {
                                HandleMaxPrice()
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}