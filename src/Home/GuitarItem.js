import React from "react";
import Slider from "react-slick";
import { guitarImg } from "../datas/subData";

const GuitarItem = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    nextArrow: (
      <div>
        <div className="next-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-arrow"> ⫷ </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="guitar-sale"> Hot Sale </h2>
      <Slider {...settings}>
        {guitarImg.map((infos) => {
          const { id, img, alt, url } = infos;
          return (
            <a href={url} key={id} className="trail">
              <img src={img.url} alt={alt} className="guitars" />
            </a>
          );
        })}
        <div>{/* leave one empty div for space */}</div>
      </Slider>
    </div>
  );
};

export default GuitarItem;
