import "../styles/slick.css"
import "../styles/slick-theme.css"
import "pure-react-carousel/dist/react-carousel.es.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"

/* istanbul ignore next */
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
