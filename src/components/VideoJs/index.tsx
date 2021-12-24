import { forwardRef } from "@chakra-ui/react"
import React, {
	ForwardedRef,
	ForwardRefRenderFunction,
  Ref,
} from "react"
import videojs from "video.js"
import "video.js/dist/video-js.css"

type Props = {
	options?: object
  ref?: Ref<HTMLDivElement>
}

const VideoJs = (
	props: Props,
) => {
	const videoRef = React.useRef<any>(null)

	const VideoHtml = (props) => (
		<div data-vjs-player>
			<video
				ref={videoRef}
				className='video-js vjs-big-play-centered'
			/>
		</div>
	)
	React.useEffect(() => {
		const videoElement = videoRef.current
		let player
		if (videoElement) {
			player = videojs(videoElement, props.options, () => {
				console.log("player is ready")
			})
			// props.ref.current = player
		}
		return () => {
			if (player) {
				player.dispose()
			}
		}
	}, [props.options])

	return <VideoHtml ref={props.ref} />
}

export default VideoJs
