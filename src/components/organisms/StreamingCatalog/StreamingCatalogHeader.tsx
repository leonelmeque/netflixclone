import Layout from "-components/atoms/Layout"
import Link from "next/link"
import { VoidFunctionComponent } from "react"

interface StreamingCatalogHeaderProps {
	catalogTitle: string
	catalogNumber: number
}

const StreamingCatalogHeader: VoidFunctionComponent<StreamingCatalogHeaderProps> =
	(props) => {
		return (
			<Layout>
				{/* Catalog Header */}
				<div>
					<h3>{props.catalogTitle}</h3>
					<Link href='#'>
						<span>Explore All</span>
					</Link>
					<span>Icon goes here</span>
				</div>
				{/* movie catalog position */}
				<div></div>
			</Layout>
		)
	}

export default StreamingCatalogHeader
