import Image from "-components/atoms/Image"
import MovieActions from "-components/molecules/MovieActions"
import MovieInfo from "-components/molecules/MovieInfo"
import { MovieMetadata } from "-types/*"
import { useState, VoidFunctionComponent } from "react"

interface MovieProps extends MovieMetadata {}

const Movie: VoidFunctionComponent<MovieProps> = ({
	overview,
	adult,
	backdrop_path,
	genre_ids,
	id,
	original_title,
	popularity,
	poster_path,
	release_date,
	title,
	video,
}) => {
	const [isHover, setIsHover] = useState<boolean>(false)

	const handleMouseEnter = () => {
		setIsHover(!isHover)
	}

	return (
		<div
			className={`rounded cursor-pointer w-full z-30`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseEnter}
		>
			<div className='w-full'>
				<Image
					src={`${process.env.IMAGE_ENDPOINT}/${backdrop_path}`}
					alt=''
					customClasses='object-cover'
				/>
			</div>
			{/* <div className='hidden group-hover:absolute group-hover:block'>
					<MovieActions
						actions={{
							bookmark: true,
							like: true,
							more: true,
						}}
						isBookmarked={false}
						hasLike='none'
					/>

					<MovieInfo description={"some description"} />
				</div> */}
		</div>
	)
}

export default Movie
