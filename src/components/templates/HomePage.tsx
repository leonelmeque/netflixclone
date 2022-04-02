import HeaderWeb from "-components/organisms/Header/HeaderWeb"
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
		</>
	)
}

export default HomePage
