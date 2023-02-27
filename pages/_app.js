import { useRouter } from 'next/router'
import NavBar from '../components/Navbar/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return(
		<div className="w-full bg-background min-h-screen">
			<NavBar />
			<main className="flex justify-center">
				<div className="max-w-page grow">
					<Component {...pageProps} />
				</div>
			</main>
		</div>
	)
}

export default MyApp