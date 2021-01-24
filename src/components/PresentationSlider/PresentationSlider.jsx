import React from "react";
import Slider from "react-slick";

import style from "./PresentationSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "../../assets/img/slider01.png";
import slide02 from "../../assets/img/slider02.png";
import slide03 from "../../assets/img/slider03.png";

const PresentationSlider = () => {
  const gallery = [
    {
      photo: slide01,
      title: "Tokenplace",
      description: "Multi-exchange Trading Terminal",
    },
    {
      photo: slide02,
      title: "Fund Platform",
      description: "Hedge funds wealth management",
    },
    {
      photo: slide03,
      title: "Noviscient",
      description: "Management Platform",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    slickPlay: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    dotsClass: `${style.sliderDots}`,
  };
  return (
    <div className={style.sliderWrapper}>
      <Slider {...settings} className={style.slider}>
        {gallery.map((item, index) => (
          <div key={index} className={style.slide}>
            <div className={style.imageWrapper}>
              <img src={item.photo} className={style.image} alt="" />
            </div>
            <h2 className={style.title}>{item.title}</h2>
            <div className={style.description}>{item.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PresentationSlider;
