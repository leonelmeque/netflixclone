import Layout from "-components/atoms/Layout"
import { FunctionComponent } from "react"
import StreamingCatalogHeader from "./StreamingCatalogHeader"

interface StreamingCatalogProps<T = {}> {
	catalogName: string
	catalogData: T[]
}

const StreamingCatalog: FunctionComponent<StreamingCatalogProps> =
	(props) => {
		return (
			<>
				<StreamingCatalogHeader
					catalogTitle='My List'
					catalogNumber={10}
				/>
                {/* Movie carousel */}
			</>
		)
	}

export default StreamingCatalog
