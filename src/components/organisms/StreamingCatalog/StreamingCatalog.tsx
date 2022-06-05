import { VoidFunctionComponent } from "react"

import Movie from "../Movie/Movie"
import { MovieInterface, MovieMetadata } from "-types/*"
import Slider from "../Carousel/Slider"
import Slide from "../Carousel/Slide"
interface StreamingCatalogProps {
	catalog: MovieMetadata[]
}

const StreamingCatalog: VoidFunctionComponent<StreamingCatalogProps> =
	({ catalog }) => (
		<Slider>
			{catalog?.map((movie, index) => (
				<Slide className="w-[240px]">
					<Movie key={movie?.title} {...movie} />
				</Slide>
			))}
		</Slider>
	)

export default StreamingCatalog
