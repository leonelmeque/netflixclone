import {
	Box,
	BoxProps,
	Container,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react"
import HeroSignUpForm from "./HeroSignUpForm"
import Navbar from "./Navbar"

const overlayMixin: BoxProps = {
	left: "0",
	right: "0",
	width: "100%",
	height: "100%",
	position: "absolute",
}

const HeroHeader = (): JSX.Element => {
	return (
		<Box
			width={"100%"}
			role='banner'
			as='header'
			data-testid='hero-header'
			minHeight={{ base: "600px", lg: "700px" }}
			position={"relative"}
			_before={{
				content: '""',
				backgroundColor: "rgba(0,0,0,.65)",
				...overlayMixin,
				zIndex: "-1",
			}}
		>
			<Image
				{...overlayMixin}
				objectFit={"cover"}
				zIndex={"-2"}
				src='/images/hero-img.jpeg'
				alt='Banner image'
			/>
			<Navbar />
			<Container maxW={"container.xl"} position={'relative'} >
				<Box
					maxW={"600px"}
					width={"100%"}
					margin={"0 auto"}
					padding={'0 12px'}
					position={'absolute'}
					top='50%'
					left='50%'
					transform={"translate(-50%,50%)"}
				>
					<Box
						color={"brand.white"}
						textAlign={"center"}
						marginBottom={"12px"}
					>
						<Heading
							as='h1'
							fontSize={{ base: "32px", md: "48px", lg: "64px" }}
						>
							Ultimate movies, Tv shows, and more.
						</Heading>
						<Text fontSize={"24px"}>
							Watch anywhere. Cancel anytime.
						</Text>
					</Box>
					<HeroSignUpForm />
				</Box>
			</Container>
		</Box>
	)
}

export default HeroHeader
