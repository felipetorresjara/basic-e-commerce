import ProductItem from "../../Templates/ProductItem/ProductItem"

export default function TopProducts(props){
    const { products, title } = props
    return(
        <div>
            <div className="bg-secondary text-white font-bold text-2xl w-80 text-right pr-10 mb-2">
                {title}
            </div>
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-4 px-1 tablet:px-4">
                {products.map((product, index) =>
                    <div className="justify-center" key={product.id} >
                        <ProductItem product={product} key={product.id}/>
                    </div>
                )
                }
            
            </div>
        </div>
    )
}