import { VoidFunctionComponent } from "react"

interface MovieInfoProps {
	cast?: string
	genres?: string
	movieType?: string
	description?: string
	match?: number
	year?: number | string
	rated?: string | number
	duration?: string
    mini?: boolean
}

const MovieInfo: VoidFunctionComponent<MovieInfoProps> =
	({
		cast,
		genres,
		movieType,
		description,
		match,
		year,
		rated,
		duration,
	}) => (
        <div className="flex bg-white">
            <div className="flex flex-col flex-2">
                <div className="flex">{match}% match {year} {rated} {duration}</div>
                <p>{description}</p>
            </div>
            <div className="flex flex-col flex-1">
                <p><span>Cast:</span> {cast}</p>
                <p><span>Genres:</span> {genres}</p>
                <p><span>This show is:</span> {movieType}</p>
            </div>
        </div>
    )

export default MovieInfo
