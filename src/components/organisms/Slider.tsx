import { FunctionComponent } from "react"

interface SliderProps {}

export const Slide: FunctionComponent = ({ children }) => {
	return (
		<div
			className={`
            bg-green 
            peer
            group-hover:-translate-x-[25%]
            peer-hover:translate-x-[25%]
            hover:scale-[1.4]
            transition-[transform] 
            delay-300
            flex-shrink-0
            flex-grow-0
            basis-2/12
            mx-1
            cursor-pointer
            ease-in-out`}
		>
			{children}
		</div>
	)
}

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
