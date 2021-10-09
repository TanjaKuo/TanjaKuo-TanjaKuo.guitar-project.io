import React from "react";
import ProtoType from "prop-types";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerImg } from "../subData";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };

  return (
    <Carousel {...settings}>
      {bannerImg.map((detail) => {
        const { id, img, alt } = detail;
        return (
          <div key={id}>
            <img src={img.url} alt={alt} className="banner" />
          </div>
        );
      })}
    </Carousel>
  );
};

Banner.ProtoType = {
  img: ProtoType.object.isRequired,
  id: ProtoType.number.isRequired,
  alt: ProtoType.string.isRequired,
};
export default Banner;
