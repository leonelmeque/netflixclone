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
				<div className="text-white text-lg flex gap-4 items-center">
					<h3>{props.catalogTitle}</h3>
					<Link href='#'>
						<span className="text-sm">Explore All</span>
					</Link>
					
				</div>
				{/* movie catalog position */}
				<div></div>
			</Layout>
		)
	}

export default StreamingCatalogHeader
