import '../styles/globals.css'
import "../styles/slick.css";
import "../styles/slick-theme.css";
import { ChakraProvider } from '@chakra-ui/react'

/* istanbul ignore next */
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
