import { FunctionComponent } from "react"

interface SliderProps {}

const Slider: FunctionComponent<SliderProps> = ({
	children,
}) => {
	return (
		<div className='py-10 overflow-hidden relative'>
			<div className='group flex w-full px-11'>{children}</div>
		</div>
	)
}

export default Slider
