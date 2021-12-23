import React from 'react';
import Slider from 'react-slick';

type CarouselProps = {
  children?: React.ReactNode;
};

type CustomSlideProps = {
  index?: number;
  slide: React.ReactNode;
};

const CustomSlide = ({
  index,
  slide,
  ...args
}: CustomSlideProps): JSX.Element => {
  return <div {...args}>{slide}</div>;
};

const Carousel = (props: CarouselProps): JSX.Element => {
  const { children } = props;
  const customSlides = React.Children.toArray(children);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <Slider {...settings}>
      {customSlides.map((child) => (
        <CustomSlide slide={child} />
      ))}
    </Slider>
  );
};

export default Carousel;
