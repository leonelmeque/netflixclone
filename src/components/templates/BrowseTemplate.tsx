import FooterWeb from "-components/organisms/Footer/FooterWeb"
import Billboard from "-components/organisms/Billboard/Billboard"
import { Fragment, VoidFunctionComponent } from "react"
import dynamic from "next/dynamic"

const StreamingCatalogContainer = dynamic(
	() =>
		import(
			"-components/organisms/StreamingCatalog/StreamingCatalogContainer"
		),
	{
		ssr: false,
	}
)

interface AppTemplateProps {}

const AppTemplate: VoidFunctionComponent<AppTemplateProps> =
	() => {
		return (
			<Fragment>
				<Billboard />
				<main className='bg-black relative'>
					<StreamingCatalogContainer
						catalogName='Streaming now'
						resource='popular'
					/>
					<StreamingCatalogContainer
						catalogName='Now Playing now'
						resource='now_playing'
					/>
					<StreamingCatalogContainer
						catalogName='Top Rated now'
						resource='top_rated'
					/>
				</main>
				<FooterWeb />
			</Fragment>
		)
	}

export default AppTemplate
