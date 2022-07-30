import { VoidFunctionComponent } from "react"
import Movie from "../Movie/Movie"
import { MovieMetadata } from "-types/*"
import {Slider} from "../Carousel/CarouselSlider"
import {Slide} from "../Carousel/CarouselSlide"

interface StreamingCatalogProps {
	catalog: MovieMetadata[]
}

const StreamingCatalog: VoidFunctionComponent<StreamingCatalogProps> =
	({ catalog }) => (
		<Slider data={catalog}>
			{catalog?.map((movie, index) => (
				<Slide key={index.toString()} className={`slide-${index} w-[240px]`}>
					<Movie key={movie?.title} {...movie} />
				</Slide>
			))}
		</Slider>
	)

export default StreamingCatalog
