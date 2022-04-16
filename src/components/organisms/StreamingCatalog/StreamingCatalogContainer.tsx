import Layout from "-components/atoms/Layout"
import {
	getMovieDetails,
	getMovies,
} from "-services/api/api"
import {
	FunctionComponent,
	useEffect,
	useState,
} from "react"
import StreamingCatalog from "./StreamingCatalog"
import StreamingCatalogHeader from "./StreamingCatalogHeader"

interface StreamingCatalogContainerProps<T = {}> {
	catalogName: string
	catalogURL?: string
	resource?: string
}

const StreamingCatalogContainer: FunctionComponent<StreamingCatalogContainerProps> =
	({ catalogURL, catalogName, resource }) => {
		const [movies, setMovies] = useState<any>(null)

		useEffect(() => {
			getMovies(resource).then((data) => {
				setMovies(data.results)
			})
		}, [])

		return (
			<>
				<StreamingCatalogHeader
					catalogTitle={catalogName}
					catalogNumber={10}
				/>
				{/* Movie carousel */}
				<StreamingCatalog catalog={movies} />
			</>
		)
	}

export default StreamingCatalogContainer
