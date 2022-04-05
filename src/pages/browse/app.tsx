// import AppHeroHeader from "-components/AppHeroHeader"
// import Spacer from "-components/@ui-elements/Spacer/Spacer"
import Dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"
import {
	API_KEY,
	WEB_API,
} from "-utilities/constants/constants"
import FetchResource from "-components/FetchResource"
import { Box } from "@chakra-ui/react"

// const StreamingCatalog = Dynamic(
// 	() =>
// 		import("-components/StreamingCatalog/StreamingCatalog"),
// 	{ ssr: false }
// )

const App = () => {
	return <></>
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
export default App
