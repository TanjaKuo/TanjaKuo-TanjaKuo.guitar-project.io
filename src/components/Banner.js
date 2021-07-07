import React, { useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerImg } from "../subData";
import b1 from "../image/b1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";
import banner4 from "../image/banner4.png";
import banner5 from "../image/banner5.png";

const Banner = () => {
  const [img, setImg] = useState(bannerImg);
  const settings = {
    /* dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, */
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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
  /*   return (
    <Carousel {...settings}>
      {img.map((pic) => {
        const { src, id, alt } = pic;
        return <img src={src} key={id} alt={alt} />;
      })}
    </Carousel>
  ); */
  return (
    <Carousel {...settings}>
      <div>
        <img src={b1} alt="banner1" className="banner" />;
      </div>
      <div>
        <img src={banner2} alt="banner2" className="banner" />;
      </div>
      <div>
        <img src={banner3} alt="banner3" className="banner" />
      </div>
      <div>
        <img src={banner4} alt="banner4" className="banner" />;
      </div>
      <div>
        <img src={banner5} alt="banner5" className="banner" />;
      </div>
    </Carousel>
  );
};

export default Banner;
