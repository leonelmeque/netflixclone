import "../styles/slick.css"
import "../styles/slick-theme.css"
import "pure-react-carousel/dist/react-carousel.es.css"
import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import theme from '@/theme/index'
import { QueryClient, QueryClientProvider } from "react-query"
/* istanbul ignore next */

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default MyApp
