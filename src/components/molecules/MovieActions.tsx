import { VoidFunctionComponent } from "react"

interface MovieActionsProps {
	actions: {
		play?: boolean
		bookmark?: boolean
		like?: boolean
		volume?: boolean
		more?: boolean
	}
	isBookmarked: boolean
	hasLike: "bad" | "good" | "amazing" | "none"
}

const MovieActions: VoidFunctionComponent<MovieActionsProps> =
	({ actions, isBookmarked, hasLike }) => {
		const { play, bookmark, like, volume, more } = actions
		return (
			<div className='flex justify-between items-center'>
				<div className='flex'>
					{play && <></>}
					{bookmark && <>{isBookmarked ? <></> : <></>}</>}
					{like && <>{hasLike ? <></> : <></>}</>}
				</div>
				<div>
					{volume && <></>}
					{more && <></>}
				</div>
			</div>
		)
	}

export default MovieActions
