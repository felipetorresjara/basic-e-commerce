import { useRouter } from "next/router"
import Filter from "../components/Listing/Filter/Filter"
import Pagination from "../components/Listing/Pagination/Pagination"
import ProductItem from "../components/Templates/ProductItem/ProductItem"

export async function getServerSideProps({query}) {
    const data = await fetch(`http://localhost:8080/api/products?${new URLSearchParams(query).toString()}`)
    const response = await data.json()
    return {
        props: response,
    }
}

export default function Listing(props) {
	const { total, page, total_pages:totalPages, products } = props
    const router = useRouter()

	return (
		<div className="grid grid-cols-12 pt-5">   
            <article className="mobile:hidden desktop:block mobile:col-span-1 desktop:col-span-2">
                <Filter total={total} router={router}/>
            </article>
            <div className="mobile:col-span-12 desktop:col-span-10 grid gap-2 grid-cols-12 pl-1 pb-20">
                {products.map((prod, index)=>
                    <div className="mobile:col-span-6 tablet:col-span-4 desktop:col-span-3 justify-center" key={prod.id} >
                        <ProductItem product={prod} key={prod.id}/>
                    </div>
                )}
                <Pagination totalPages={totalPages} page={page} router={router}/>
            </div>
		</div>
	)
}
