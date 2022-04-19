import { ComponentProps } from "react"

interface MoviePosterProps extends ComponentProps<"img"> {
	customClasses?: string
}

const MoviePoster = (
	{customClasses, ...rest}: MoviePosterProps
): JSX.Element => (
	<img
		onError={(e) => {
			if (e instanceof Error) {
				console.error("Error loading image")
			}
		}}
		className={`w-full h-full ${customClasses || ''}`.trim()}
		{...rest}
	/>
)

export default MoviePoster
