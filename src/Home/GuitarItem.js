import React from "react";
import Slider from "react-slick";
import { guitarImg } from "../subData";
/* import fender1 from "../image/fender1.png";
import fender2 from "../image/fender2.png";
import gibson3 from "../image/gibson3.png";
import gibson4 from "../image/gibson4.png";
import gibson5 from "../image/gibson5.png";
import yamaha6 from "../image/yamaha6.png";
import yamaha7 from "../image/yamaha7.png";
import yamaha8 from "../image/yamaha8.png"; */

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
          const { id, img, alt } = infos;
          return (
            <div key={id}>
              <img src={img.url} alt={alt} className="guitars" />
            </div>
          );
        })}
        {/* 
        <div>
          <img src={fender1} alt="guitar1" className="guitars" />
        </div>
        <div>
          <img src={fender2} alt="guitar2" className="guitars" />
        </div>
        <div>
          <img src={gibson3} alt="guitar3" className="guitars" />
        </div>
        <div>
          <img src={gibson4} alt="guitar4" className="guitars" />
        </div>
        <div>
          <img src={gibson5} alt="guitar5" className="guitars" />
        </div>
        <div>
          <img src={yamaha6} alt="guitar5" className="guitars" />
        </div>
        <div>
          <img src={yamaha7} alt="guitar5" className="guitars" />
        </div>
        <div>
          <img src={yamaha8} alt="guitar5" className="guitars" />
        </div> */}
        <div>{/* leave one empty div for space */}</div>
      </Slider>
    </div>
  );
};

export default GuitarItem;
