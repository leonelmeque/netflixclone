import styles from "@/ui-modules/home/styles.module.css"
import Accordion from "@/components/@ui-elements/Accordion"
import Footer from "@/components/@ui-elements/Footer"
import React from "react"
import { homeData } from "@/utilities/constants/static-text"
import Head from "next/head"
import HeroHeader from "@/components/HeroHeader"
import HeroSignUpForm from "@/components/HeroSignUpForm"
import {
	Box,
	Container,
	Divider,
	Flex,
	Heading,
	Image,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react"

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
				marginX={{ base: "auto", lg:'0' }}
				textAlign={{ base: "center",lg:'left' }}
			>
				{props.featureName}
			</Heading>
			<Text fontSize={{ base: "20px", lg: "28px" }}>
				{props.description}
			</Text>
		</>
	)
	return (
		<>
			<Head>
				<title>Netflix Clone Home Page</title>
				<meta name='description' content='Netflix clone' />
			</Head>
			<HeroHeader />
			<Box style={{ background: "#222" }}>
				<Divider height={"12px"} />
				{/* Feature 1 */}
				<Box as='section' color={"brand.white"} bg='black'>
					<Container
						maxW='container.xl'
						display={"flex"}
						flexFlow={{ base: "column", lg: "row" }}
						alignItems={"center"}
						padding='48px 0px'
					>
						<Box
							flex={1}
							textAlign={{ base: "center", lg: "left" }}
						>
							<FeatureDescription
								featureName='Enjoy on yoyr Tv.'
								description='Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple Tv, Blue-ray players, and more,'
							/>
						</Box>
						<Box flex={1} position={"relative"}>
							<Image
								src='/images/tv.png'
								alt='tv'
								position='relative'
								zIndex={1}
							/>
							<Box
								as='video'
								muted
								loop
								playsInline
								position={"absolute"}
								top='50%'
								left='50%'
								transform={"translate(-50%,-50%)"}
								zIndex={0}
							>
								<Box
									as='source'
									src='/video/video-tv-0819.m4v'
									type='video/mp4'
								/>
							</Box>
						</Box>
					</Container>
				</Box>
				<Divider height={"12px"} />
				{/* Feature 2 */}
				<Box as='section' color={"brand.white"} bg='black'>
					<Container
						maxW='container.xl'
						display={"flex"}
						flexFlow={{ base: "column", lg: "row-reverse" }}
						alignItems={"center"}
						padding='48px 0px'
					>
						<Box
							flex={1}
							textAlign={{ base: "center", lg: "left" }}
						>
							<FeatureDescription
								featureName='Download your shows to watch offline'
								description='Save your favorites easly and always have something to watch'
							/>
						</Box>
						<Box position={"relative"}>
							<Image
								src='/images/mobile.jpeg'
								alt='mobile'
								position='relative'
								zIndex={0}
							/>
							<Flex
								height={"4rem"}
								borderRadius={".7rem"}
								border='2px solid rgb(255, 255, 255, .25)'
								padding='.25rem 0'
								maxWidth={"280px"}
								background={"black"}
								width={"100%"}
								position={"absolute"}
								top='80%'
								left='50%'
								transform={"translate(-50%,-50%)"}
								zIndex={1}
							>
								<img
									className={styles.floatingCardImg}
									src='/images/stcover.png'
									alt='stanger things movie cover'
								/>
								<div className={styles.floatingCardText}>
									<span>Stranger Things</span>
									<span>Downloading...</span>
								</div>
								<div
									className={styles.floatingCardIconAnimation}
								></div>
							</Flex>
						</Box>
					</Container>
				</Box>
				<Divider height={"12px"} />
				{/* Feature 3 */}
				<Box as='section' color={"brand.white"} bg='black'>
					<Container
						maxW='container.xl'
						display={"flex"}
						flexFlow={{ base: "column", lg: "row" }}
						alignItems={"center"}
						padding='48px 0px'
					>
						<Box
							flex={1}
							textAlign={{ base: "center", lg: "left" }}
						>
							<FeatureDescription
								featureName='Watch everywhere.'
								description='Stream unlimited movies and TV shows on your phone. tablet, laptop, and TV without paying more'
							/>
						</Box>
						<Box flex={1} position={"relative"}>
							<Image
								src='/images/imac.png'
								alt='tv'
								position='relative'
								zIndex={1}
							/>
							{/* <Box
							as='video'
							muted
							loop
							playsInline
							position={"absolute"}
							top='50%'
							left='50%'
							transform={"translate(-50%,-50%)"}
							zIndex={0}
						>
							<Box
								as='source'
								src='/video/video-tv-0819.m4v'
								type='video/mp4'
							/>
						</Box> */}
						</Box>
					</Container>
				</Box>
				<Divider height={"12px"} />
				{/* Feature 4 */}
				<Box as='section' color={"brand.white"} bg='black'>
					<Container
						maxW='container.xl'
						display={"flex"}
						flexFlow={{ base: "column", lg: "row-reverse" }}
						alignItems={"center"}
						padding='48px 0px'
					>
						<Box
							flex={1}
							textAlign={{ base: "center", lg: "left" }}
						>
							<FeatureDescription
								featureName='Create profiles for kids.'
								description='Send kids on adventures with their favorite characters in a space made just for them--free with your membership.'
							/>
						</Box>
						<Box position={"relative"}>
							<Image
								src='/images/kids.png'
								alt='profile for kids'
								position='relative'
								zIndex={0}
							/>
						</Box>
					</Container>
				</Box>
				<Divider height={"12px"} />
				<Flex
					as='section'
					color={"brand.white"}
					flexFlow={"column"}
					bg='black'
					paddingY='24px'
				>
					<Heading
						as='h3'
						fontSize={{ base: "32px", lg: "48px" }}
						textAlign={"center"}
						marginBottom={"42px"}
					>
						Frequently Asked Questions
					</Heading>

					<Container
						maxW='container.lg'
						maxWidth={"800px"}
						marginBottom={"32px"}
					>
						{/* Buttons with icons go here */}

						<UnorderedList>
							{homeData.faq.map(({ id, question, answer }) => (
								<ListItem key={id.toString()} marginBottom={"8px"}>
									<Accordion
										label={question}
										dropdownText={answer}
									/>
								</ListItem>
							))}
						</UnorderedList>
					</Container>
					<Container maxWidth={"container.xl"}>
						<Box maxW={"600px"} width={"100%"} margin={"0 auto"}>
							<HeroSignUpForm />
						</Box>
					</Container>
				</Flex>
				<Divider height={"12px"} />
				{/* Footer component goes here */}
				<Footer showOnRoot />
			</Box>
		</>
	)
}

export async function getStaticProps(context) {
	// There's is nothing to be returned now
	return {
		props: {},
	}
}

export default Home
