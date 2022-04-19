import { VoidFunctionComponent } from "react"

import Movie from "../Movie/Movie"
import { MovieInterface, MovieMetadata } from "-types/*"
import Slider, { Slide } from "../Slider"

interface StreamingCatalogProps {
	catalog: MovieMetadata[]
}

const StreamingCatalog: VoidFunctionComponent<StreamingCatalogProps> =
	({ catalog }) => (

			<Slider>
				{catalog?.map((item, index) => (
					<Slide key={item?.title}>
						<Movie {...item} />
					</Slide>
				))}
			</Slider>
	
	)

export default StreamingCatalog
