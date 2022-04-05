import React from "react"
import { Heading, Text } from "@chakra-ui/react"
import HomePageTemplate from "-components/templates/HomePageTemplate"

const Home = () => <HomePageTemplate />

export async function getStaticProps(context) {
	// There's is nothing to be returned now
	return {
		props: {},
	}
}

export default Home
