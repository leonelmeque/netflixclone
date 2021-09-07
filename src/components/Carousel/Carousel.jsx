import React from 'react';
import Slider from 'react-slick';

const CustomSlide = ({ index, slide, ...args }) => {
  return <div {...args}>{slide}</div>;
};

const Carousel = (props) => {
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
        <CustomSlide
          slide={child}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
