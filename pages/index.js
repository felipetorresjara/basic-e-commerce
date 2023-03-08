import LazyLoad from "react-lazyload"
import Banner from "../components/Home/banner"
import TopProducts from "../components/Home/TopProducts/TopProducts"


// export async function getServerSideProps(context) {
//   const data = await fetch('http://localhost:10000/')
//   const response = await data.json()
//   return {
//     props: response,
//   }
// }

const freeProducts = [
    {
      "id": "gaq8no4krczakxrlhg5m",
      "name": "Dark Deity",
      "product_id": "gaq8no4krczakxrlhg5m",
      "image": "https://cdn1.epicgames.com/spt-assets/1d1ceda7b1ba4e7893a36a1166ac3e41/download-dark-deity-offer-1p2y4.jpg?h=854&resize=1&w=640",
      "product_url": "https://www.eneba.com/latam/steam-assetto-corsa-pc-steam-key-latam-1",
      "category": "1000",
      "retail": "eneba",
      "price": 0
    },
    {
      "id": "lFZ_o6Ns3bTO3PIn3cQYDzbbpwFskBtTBQ_8JEURYus",
      "name": "Evil Dead: The Game",
      "product_id": "lFZ_o6Ns3bTO3PIn3cQYDzbbpwFskBtTBQ_8JEURYus",
      "image": "https://cdn1.epicgames.com/offer/95e09a8c24c44684bca1a6f25aea920c/EGS_EvilDeadTheGame_SaberInteractiveInc_S2_1200x1600-8e839d708bc638cd58c219ae38d58f6f_1200x1600-8e839d708bc638cd58c219ae38d58f6f?h=854&resize=1&w=640",
      "product_url": "https://www.eneba.com/latam/steam-euro-truck-simulator-2-gold-edition-steam-key-latam",
      "category": "1000",
      "retail": "eneba",
      "price": 0
    },
    {
      "id": "ufu85bhpdouoamausfld",
      "name": "Nioh 2",
      "product_id": "ufu85bhpdouoamausfld",
      "image": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Nioh2TheCompleteEdition_KOEITECMOGAMESCOLTD_S2_1200x1600-3af607bc038a6726c3a14dbc376ad85f?h=854&resize=1&w=640",
      "product_url": "https://www.eneba.com/latam/origin-need-for-speed-payback-en-fr-es-pt-origin-key-global",
      "category": "1000",
      "retail": "eneba",
      "price": 0
    },
    {
      
		"id": "rg9QsskhY84SU4BraR5wdfa3XQ34aGfvVvoh5L0MpXI",
		"name": "Drawful 2 Steam Key GLOBAL",
		"product_id": "rg9QsskhY84SU4BraR5wdfa3XQ34aGfvVvoh5L0MpXI",
		"image": "https://cdn-products.eneba.com/resized-products/rg9QsskhY84SU4BraR5wdfa3XQ34aGfvVvoh5L0MpXI_350x200_1x-0.jpeg",
		"product_url": "https://www.eneba.com/latam/steam-drawful-2-steam-key-global",
		"category": "300",
		"retail": "eneba",
		"price": 0
	  },
	  {
		"id": "kMj5TI2zlQp5ov2IfQO6UjJOBOQ37C9w1bXRuqeKcAs",
		"name": "Morbid: The Seven Acolytes Steam Key GLOBAL",
		"product_id": "kMj5TI2zlQp5ov2IfQO6UjJOBOQ37C9w1bXRuqeKcAs",
		"image": "https://cdn-products.eneba.com/resized-products/kMj5TI2zlQp5ov2IfQO6UjJOBOQ37C9w1bXRuqeKcAs_350x200_1x-0.jpeg",
		"product_url": "https://www.eneba.com/latam/steam-morbid-the-seven-acolytes-steam-key-global",
		"category": "300",
		"retail": "eneba",
		"price": 0
	  },
	  {
		"id": "onYmDbRiqqpRwySlZi2awRapFOzw8evy_3VvgwQFg-4",
		"name": "Legion TD 2 Steam Key GLOBAL",
		"product_id": "onYmDbRiqqpRwySlZi2awRapFOzw8evy_3VvgwQFg-4",
		"image": "https://cdn-products.eneba.com/resized-products/onYmDbRiqqpRwySlZi2awRapFOzw8evy_3VvgwQFg-4_350x200_1x-0.jpeg",
		"product_url": "https://www.eneba.com/latam/steam-legion-td-2-steam-key-global",
		"category": "300",
		"retail": "eneba",
		"price": 0
	  },
]

export default function Home(props) {
	const { top_products:topProducts} = props
	return (
		<div>
			<Banner />
			<div className="pt-4">
				<TopProducts products={freeProducts} title={"Juegos Gratuitos"}/>
			</div>
			<div className="mt-8">
				<div className="bg-secondary text-white font-bold text-2xl w-80 text-right pr-10 mb-2">
					Tiendas Disponibles
				</div>
				<div className="grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-3 gap-4 px-5 items-center">
					<LazyLoad height={240} offset={100}>
                        <img
                            className="w-full h-40 object-fill"
                            src={'https://cdn.eneba.com/branding/v2/logoFull.svg'} 
                        />
                    </LazyLoad>
					<LazyLoad height={240} offset={100}>
                        <img
                            className="w-full h-40 object-contain"
                            src={'https://upload.wikimedia.org/wikipedia/commons/a/a7/Epic_Games_logo.png'} 
                        />
                    </LazyLoad>
					<LazyLoad height={240} offset={100}>
                        <img
                            className="w-full h-40 object-fill"
                            src={'https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'} 
                        />
                    </LazyLoad>
				</div>
			</div>
		</div>
	)
}
