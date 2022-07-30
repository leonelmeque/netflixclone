import { ComponentProps, FunctionComponent } from "react"
import styles from "./styles.module.css"
interface SlideProps extends ComponentProps<"li"> { }

const CarouselSlide: FunctionComponent<SlideProps> = ({
	className,
	children,
}) => (
	<li className={`${styles['carousel-item']} ${className}`.trim()}>
		{children}
	</li>
)

CarouselSlide.displayName = "Slide"

export { CarouselSlide as Slide }
