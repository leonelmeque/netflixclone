import Dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"
import {
	API_KEY,
	WEB_API,
} from "-utilities/constants/constants"
import FetchResource from "-components/FetchResource"
import { Box } from "@chakra-ui/react"
import BrowseTemplate from "-components/templates/BrowseTemplate"


const App = () => {
	return <BrowseTemplate />

}

export default App
