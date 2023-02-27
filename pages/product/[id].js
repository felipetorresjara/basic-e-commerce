import react from "react";

export async function getServerSideProps({params}) {
    const data = await fetch(`http://localhost:8080/api/products/${params.id}`)
    const response = await data.json()
    return {
        props: response,
    }
}

export default function Product(props){
    return(
        <div className="grid grid-cols-12 pt-5 px-2 gap-2">
            <div className="col-span-5 max-h-96 h-96">
            <div className="w-full h-full m-auto bg-background">
                <img
                    src={props.image}
                    className="object-contain max-h-96 m-auto"
                />
            </div>
            </div>
            <div className="col-span-7">
                <div>
                    <img
                        src="https://cdn.eneba.com/branding/v2/logoFull.svg"
                        width={100}
                        height={100}
                        className="w-28 object-contain"
                    />
                </div>
                <p className="text-white text-xl font-semibold line-clamp-2 py-2">
                    {props.name}
                </p>
                <div className="text-white text-lg pb-2">
                    {`Precio: $ ${props.price}`}
                </div>
                <a href={props.product_url} target="_blank" aria-label="retail-url" rel="noreferrer">
                    <button className="rounded-full bg-secondary text-white text-center text-lg w-60 betterhover:cursor-pointer p-1 betterhover:hover:bg-hoversecondary">
                        Ir a tienda
                    </button>
                </a>
            </div>
        </div>
    )
}