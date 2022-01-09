import "../styles/slick.css"
import "../styles/slick-theme.css"
import "pure-react-carousel/dist/react-carousel.es.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from '@/theme/index'
/* istanbul ignore next */
function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp
