import { useRouter } from 'next/router'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return(
		<div className="w-full bg-background min-h-screen">
			<NavBar />
			<main className="flex justify-center">
				<div className="max-w-page grow pb-4">
					<Component {...pageProps} />
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default MyApp