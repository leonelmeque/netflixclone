import HeaderWeb from "-components/organisms/Header/HeaderWeb"
import FeatureSection from "-components/organisms/Sections/FeatureSection"
import Head from "next/head"
import { VoidFunctionComponent } from "react"

const HomePage: VoidFunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Netflix Clone Home Page</title>
				<meta name='description' content='Netflix clone' />
			</Head>
			<HeaderWeb />
			<main>
				<FeatureSection
					heading='feature 1'
					description='description 1'
					component={() => null}
				/>
				<FeatureSection
					heading='feature 1'
					description='description 1'
					component={() => null}
				/>
				<FeatureSection
					heading='feature 1'
					description='description 1'
					component={() => null}
				/>
				<FeatureSection
					heading='feature 1'
					description='description 1'
					component={() => null}
				/>
			</main>
		</>
	)
}

export default HomePage
