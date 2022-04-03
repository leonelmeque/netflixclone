import "../styles/slick.css"
import "../styles/slick-theme.css"
import "pure-react-carousel/dist/react-carousel.es.css"
import "../styles/globals.css"

import {
	QueryClient,
	QueryClientProvider,
} from "react-query"

/* istanbul ignore next */
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
		
			<Component {...pageProps} />
		</QueryClientProvider>
	)
}

export default MyApp
