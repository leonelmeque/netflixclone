import AppHeroHeader from "@/components/AppHeroHeader"
import styles from "@/ui-modules/app/styles.module.css"
import Spacer from "@/components/@ui-elements/Spacer/Spacer"
import { FETCH_MOVIES } from "@/services/api/imdbApi"
import Dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"
import { PageErrorFallbackScreen } from "@/components/ErrorScreens/ErrorScreens"
const StreamingCatalog = Dynamic(
	() =>
		import("@/components/StreamingCatalog/StreamingCatalog"),
	{ ssr: false }
)

const FallbackComponent = (): JSX.Element => (
	<>
		<div>
			<h2>
				Sorry something went wrong, please try again another
				time
			</h2>
		</div>
	</>
)

const App = () => {
	return (
		<>
			<ErrorBoundary FallbackComponent={()=><PageErrorFallbackScreen headerTitle="Opps, something went wrong :-(" message="We are having technical problems now, try again another time, really sorry" />}>
				<div className={styles.container}>
					<AppHeroHeader />
					<div className={styles.catalog}>
						<StreamingCatalog
							catalogTitle='Popular on Netflix'
							query={FETCH_MOVIES("popular")}
							resource={"popular"}
						/>
						<Spacer size='sm' />
						<StreamingCatalog
							catalogTitle='Trending on Netflix'
							query={FETCH_MOVIES("trending")}
							resource={"trending"}
						/>
						<Spacer size='sm' />
						<StreamingCatalog
							catalogTitle='Now Playing'
							query={FETCH_MOVIES("nowPlaying")}
							resource={"nowPlaying"}
						/>
						<Spacer size='sm' />
						<StreamingCatalog
							catalogTitle='Top Rated'
							query={FETCH_MOVIES("topRated")}
							resource={"topRated"}
						/>
						{/* <StreamingCatalog catalogTitle="Popular on Netflix" /> */}
					</div>
				</div>
			</ErrorBoundary>
		</>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
export default App
