export default function TopProducts(props){
    const { products, title } = props
    return(
        <div>
            <div className="bg-secondary text-white font-bold text-2xl w-80 text-right pr-10 mb-2">
                {title}
            </div>
            <div className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-4 px-5">
                {products.map((product, index) =>
                    <div key={product.id} className="bg-white w-full max-w-prodBox pb-3 betterhover:cursor-pointer">
                        <img
                            className="w-full h-60 object-fill"
                            src={product.image} 
                        />
                        <p className="text-center text-primary line-clamp-2 px-2 h-11">{product.name}</p>
                        <p className="text-center text-black font-semibold">Precio</p>
                        <div className="bg-secondary text-center text-white">
                            {product.price === 0 ? 'Gratis' : `$ ${product.price}`}
                        </div>
                    </div>
                )
                }
            
            </div>
        </div>
    )
}