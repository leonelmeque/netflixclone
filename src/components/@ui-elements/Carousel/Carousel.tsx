import styles from "./styles.module.css"
import React, { Children } from "react"
// import Slider from "react-slick"
import {
	CarouselProvider,
	Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel"

type CarouselProps = {
	children?: React.ReactNode
}

type CustomSlideProps = {
	index?: number
	slide: React.ReactNode
}

const CustomSlide = ({
	index,
	slide,
	...args
}: CustomSlideProps): JSX.Element => {
	return <div {...args}>{slide}</div>
}

const Carousel = (props: CarouselProps): JSX.Element => {
	// const { children } = props
	// const customSlides = React.Children.toArray(children)
	// const settings = {
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 2,
	// }
	// return (
	// 	<Slider {...settings}>
	// 		{customSlides.map((child) => (
	// 			<CustomSlide slide={child} />
	// 		))}
	// 	</Slider>
	// )
	const allChildren = Children.toArray(props.children)
	return (
		<CarouselProvider
			totalSlides={allChildren.length}
			visibleSlides={5}
			naturalSlideWidth={100}
			naturalSlideHeight={60}
		>
			<Slider className={`${styles.carousel}`}>
				{allChildren.map((child, index) => (
					<Slide index={index}>{child}</Slide>
				))}
			</Slider>
			<ButtonNext>Next</ButtonNext>
			<ButtonBack>Back</ButtonBack>
		</CarouselProvider>
	)
}

export default Carousel
