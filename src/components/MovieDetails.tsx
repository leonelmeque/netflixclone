import React, {
	useState,
	VoidFunctionComponent,
} from "react"
import CircleButton from "-components/common/CircleButton"
import styles from "./styles.module.css"
import YouTube from "react-youtube"
import { WEB_API } from "-utilities/constants/constants"
import { Box, Spacer } from "@chakra-ui/react"
import FetchResource from "./FetchResource"

type MovieDetailsProps = {
	isMovieInList: boolean
	hasLike: boolean
	hasDeslike: boolean
	poster: string
	isSkeleton?: boolean
	trailerUrl?: string | string[]
}

const MovieGenres: VoidFunctionComponent<{
	genres: string[]
}> = ({ genres }) => (
	<Box as='ul' className={styles.movieTags}>
		{genres?.map((genre) => (
			<li>{genre}</li>
		))}
	</Box>
)

const MovieDetails: VoidFunctionComponent<MovieDetailsProps> =
	({
		isMovieInList,
		hasLike,
		hasDeslike,
		poster,
		isSkeleton,
		trailerUrl,
		...rest
	}) => {
		const [isHover, setIsHover] = useState(false)
		return (
			<Box
				className={styles.container}
                width="max(10rem, 100px, 280px)"
				// onMouseEnter={playTrailer}
				// onMouseLeave={stopTrailer}
				cursor='pointer'
				// width='100%'
				paddingX={"4px"}
			>
				<Box
					width='100%'
					borderRadius='4px'
					overflow='hidden'
					_hover={{
						position: "absolute",
						top: 0,
						left: 0,
						filter: "drop-shadow(2px 4px 6px black)",
						transition: "all 0.3s ease-in-out",
					}}
				>
					{/* <VideoJs ref={videoPlayerRef} options={options} /> */}
					{isHover ? (
						<Box zIndex='10'>
							<YouTube videoId={null} />
						</Box>
					) : (
						<img
							style={{ width: "100%", maxWidth: "300px" }}
							src={`https://image.tmdb.org/t/p/w500${poster}`}
						/>
					)}
					<Box
						display='none'
						_hover={{
							display: "block",
							background: "black",
							padding: "1rem 0.75rem 1rem 0.75rem",
						}}
					>
						<Box
							__css={{
								display: "flex",
								gap: "0.5rem",
							}}
						>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='Play'
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName={isMovieInList ? "Check" : "Plus"}
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='ThumbsUp'
							/>
							<CircleButton
								onClick={(e) => {}}
								size={16}
								iconName='ThumbsDown'
							/>
							<CircleButton
								onClick={(e) => {}}
								style={{ marginLeft: "auto" }}
								size={16}
								iconName='ChevronDown'
							/>
						</Box>
						<Spacer size='sm' />
						<Box
							__css={{
								display: "flex",
								gap: "0.5re,",
							}}
						>
							<Box as='span' color={"#04cc04"}>
								New
							</Box>
							<Box as='span'>13+</Box>
							<Box as='span'>1h 18m</Box> <Box as='span'>HD</Box>
						</Box>

						<FetchResource queryId={"movie-genres"} query='/'>
							{({ data, isLoading }) =>
								isLoading ? (
									<></>
								) : (
									<MovieGenres genres={data as string[]} />
								)
							}
						</FetchResource>
					</Box>
				</Box>
			</Box>
		)
	}

export default MovieDetails
