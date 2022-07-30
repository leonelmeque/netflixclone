import { FunctionComponent } from "react"
import { useCarousel } from "-hooks/index"
import { SliderButton } from "./CarouselSliderButton"
import styles from "./styles.module.css"

interface SliderProps { data: any[] }

const CarouselSlider: FunctionComponent<SliderProps> = ({
	children,
	data = [],
}) => {
	console.log({data})
	const { handleNextTarget, handlePreviousTarget } = useCarousel(data)
	return (
		<div className={styles.carousel}>
			<SliderButton actionName="next" onClick={handleNextTarget} />
			<SliderButton actionName="prev" onClick={handlePreviousTarget} />
			<ul className={`${styles["carousel-slider"]} slider`}>
				{children}
			</ul>
		</div>
	)
}

CarouselSlider.displayName = "Slider"
export {CarouselSlider as Slider}
