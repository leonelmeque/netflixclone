import React, {
	createContext,
	ReactNode,
	useRef,
	MouseEvent,
} from "react"

type SliderContextProps = {
	handleNext?: (event: MouseEvent) => void
	handlePrevious?: (event: MouseEvent) => void
	data: any[]
}

export const Context = createContext<SliderContextProps>({
	data: [],
})
Context.displayName = "SliderContextProvider"

const SliderContainer = ({
	children,
	data = [],
}: {
	children: ReactNode
	data: any[]
}): JSX.Element => {
	const positionRef = useRef<number>(0)

	const scrollToElement = (element: number) => {
		const selector = `.slide:nth-child(${element + 1})`
		const slide = document.querySelector(selector)

		slide.scrollIntoView({
			behavior: "smooth",
			inline: "end",
			block: "nearest",
		})
	}

	const handleNext = (event: MouseEvent) => {
		if (positionRef.current > data.length) return
		positionRef.current++
		scrollToElement(positionRef.current)
	}
	const handlePrevious = (event: MouseEvent) => {
		if (positionRef.current < 0) return
		positionRef.current--
		scrollToElement(positionRef.current)
	}

	const value = {
		handleNext,
		handlePrevious,
		data,
	}

	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export default SliderContainer
