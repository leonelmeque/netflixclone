import Layout from "-components/atoms/Layout"
import {
	getMovieDetails,
	getMovies,
} from "-services/api/api"
import {
	Fragment,
	FunctionComponent,
	useEffect,
	useState,
} from "react"
import StreamingCatalog from "./StreamingCatalog"
import StreamingCatalogHeader from "../../molecules/StreamingCatalogHeader"
import useSWR from "swr"
import { fetcher } from "-library/lib"
import {
	API_KEY,
	WEB_API,
} from "-utilities/constants/constants"

interface StreamingCatalogContainerProps<T = {}> {
	catalogName: string
	catalogURL?: string
	resource?: string
}

const StreamingCatalogContainer: FunctionComponent<StreamingCatalogContainerProps> =
	({ catalogURL, catalogName, resource }) => {
		const { isValidating, data, error } = useSWR(
			`${WEB_API}/movie/${resource}?api_key=${API_KEY}`,
			fetcher
		)
	
		if(!data){
			return <>Loading movies</>
		}

		if(error){
			return <>Could not fetch movie catalog</>
		}

		return (
			<Fragment>
				<StreamingCatalogHeader
					catalogTitle={catalogName}
					catalogNumber={10}
				/>
				{/* Movie carousel */}
				<StreamingCatalog catalog={data.results} />
			</Fragment>
		)
	}

export default StreamingCatalogContainer
