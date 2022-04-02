import styles from "./styles.module.css"
import Layout from "@/components/@ui-elements/Layout"
import React, { FunctionComponent } from "react"
import Spacer from "@/components/@ui-elements/Spacer/Spacer"
import MovieCard from "@/components/@ui-elements/Card/Card"
import client from "@/services/api/apollo-client"
import Carousel from "@/components/@ui-elements/Carousel/Carousel"
import { Box, Heading, Text } from "@chakra-ui/react"
import {
	ButtonBack,
	ButtonNext,
	CarouselProvider,
	Slide,
	Slider,
} from "pure-react-carousel"

interface StreamCatalogProps {
	isLoading: boolean
	data: unknown
	error: unknown
	catalogTitle: string
}

type Movie = {
	poster_path: string
	overview: string
	release_date: string
	id: number
	original_title: string
	popularity: number
	genre_ids: number[]
	backdrop_path: string
}
const StreamingCatalog: FunctionComponent<StreamCatalogProps> =
	(props) => {
		const { isLoading, data, error, catalogTitle } = props

		const _data = data as { results: Movie[] }

		if (error) {
			throw new Error(
				"Something went wrong while fetching movies"
			)
		}

		if (isLoading) {
			return (
				<div style={{ fontSize: 34, color: "white" }}>
					<MovieCard />
				</div>
			)
		}
		return (
			<Box>
				<Layout column>
					<div className={styles.seeMoreTitle}>
						<Heading as='h2' fontSize='24px'>
							{catalogTitle}
						</Heading>
						<Text>Explore More</Text>
					</div>
				</Layout>
				<Spacer size='sm' />
				<Box
					as={CarouselProvider}
					totalSlides={_data.results.length}
					visibleSlides={8}
					naturalSlideWidth={200}
					naturalSlideHeight={120}
					overflow={"visible"}
					zIndex="1"
					position="relative"
					_hover={{
						zIndex:"2"
					}}
				>
					<Box as={Slider} overflow='visible' position='static'>
						{_data.results?.map((movie: Movie) => (
							<Box as={Slide} index={movie.id}>
								<MovieCard
									poster={movie.backdrop_path}
									genres={movie.genre_ids}
								/>
							</Box>
						))}
					</Box>
					<ButtonNext>Next</ButtonNext>
					<ButtonBack>Back</ButtonBack>
					{/* <Slider></Slider> */}
				</Box>
			</Box>
		)
	}

export default StreamingCatalog
