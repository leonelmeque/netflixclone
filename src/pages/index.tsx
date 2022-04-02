import React from "react"
import {
	Heading,
	Text,
} from "@chakra-ui/react"
import HomePage from "-components/templates/HomePage"

const Home = () => {
	const FeatureDescription = (props: {
		featureName: string
		description: string
	}): JSX.Element => (
		<>
			<Heading
				as='h2'
				marginBottom='12px'
				fontSize={{ base: "32px", lg: "48px" }}
				aria-label='Enjoy on your Tv.'
				maxWidth={"78%"}
				marginX={{ base: "auto", lg: "0" }}
				textAlign={{ base: "center", lg: "left" }}
			>
				{props.featureName}
			</Heading>
			<Text fontSize={{ base: "20px", lg: "28px" }}>
				{props.description}
			</Text>
		</>
	)
	return (
		<HomePage />
	)
}

export async function getStaticProps(context) {
	// There's is nothing to be returned now
	return {
		props: {},
	}
}

export default Home
