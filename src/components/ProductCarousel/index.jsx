import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer } from './styles';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import fotocarrosselA from "../../assets/fotocarrosselA.jpg";
import fotocarrosselB from "../../assets/fotocarrosselB.jpg";

const carousel = [
  { id: 1, image: fotocarrosselA },
  { id: 2, image: fotocarrosselB },
];

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export function ProductCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {carousel.map((img) => (
          <div key={img.id}>
            <img src={img.image} alt="" />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
