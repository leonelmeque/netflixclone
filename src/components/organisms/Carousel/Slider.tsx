import { FunctionComponent } from "react"
import styles from "./styles.module.css"

interface SliderProps {}

const Slider: FunctionComponent<SliderProps> = ({
	children,
}) => (
	<div className={styles.carousel}>
		<ul className={styles["carousel-slider"]}>
			{children}
		</ul>
	</div>
)
export default Slider
