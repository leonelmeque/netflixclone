import { ComponentProps, FunctionComponent } from "react"
import styles from "./styles.module.css"
interface SlideProps extends ComponentProps<"li"> {}

const Slide: FunctionComponent<SlideProps> = ({
	className,
	children,
}) => (
	<li className={`${styles['carousel-item']} ${className}`.trim()}>
		{children}
	</li>
)
export default Slide
