import AppHeroHeader from "@/components/AppHeroHeader"
import Spacer from "@/components/@ui-elements/Spacer/Spacer"
import { FETCH_MOVIES } from "@/services/api/imdbApi"
import Dynamic from "next/dynamic"
import { ErrorBoundary } from "react-error-boundary"
import { PageErrorFallbackScreen } from "@/components/ErrorScreens/ErrorScreens"
import {
	API_KEY,
	WEB_API,
} from "@/utilities/constants/constants"
import FetchResource from "@/components/FetchResource"
import { Box } from "@chakra-ui/react"
import { Icon } from "@/components/common"

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
			<ErrorBoundary
				FallbackComponent={() => (
					<PageErrorFallbackScreen
						headerTitle='Opps, something went wrong :-('
						message='We are having technical problems now, try again another time, really sorry'
					/>
				)}
			>
				
				<Box
					width='100%'
					height='100%'
					padding='0 0 10rem 0'
					minHeight='100%'
					background='#141414'
					overflow='hidden'
					position='relative'
				>
					{/* <AppHeroHeader /> */}

					<FetchResource
						query={`${WEB_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`}
						queryId='movies'
					>
						{({ data, error, isLoading }) => (
							<StreamingCatalog
								catalogTitle='Popular on Netflix'
								data={data}
								error={error}
								isLoading={isLoading}
							/>
						)}
					</FetchResource>
					<Spacer size='sm' />
					<FetchResource
						query={`${WEB_API}/movie/up_coming?api_key=${API_KEY}&language=en-US&page=1`}
						queryId='movies'
					>
						{({ data, error, isLoading }) => (
							<StreamingCatalog
								catalogTitle='Popular on Netflix'
								data={data}
								error={error}
								isLoading={isLoading}
							/>
						)}
					</FetchResource>
					<Spacer size='sm' />
					<FetchResource
						query={`${WEB_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`}
						queryId='movies'
					>
						{({ data, error, isLoading }) => (
							<StreamingCatalog
								catalogTitle='Popular on Netflix'
								data={data}
								error={error}
								isLoading={isLoading}
							/>
						)}
					</FetchResource>
				</Box>
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
