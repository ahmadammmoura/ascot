import React from "react";
import heroImage from "../../assets/Images/pexels-pavel-danilyuk-7658434.jpg";
import image2 from "../../assets/Images/pexels-fauxels-3183165.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import classes from "./style/service.module.css";

function Slider() {
  const options = {
    type: "loop",
    autoplay: true,
    rewind: true,
  };
  return (
    <div className={classes.slider}>
      <Splide options={options} aria-label="My Favorite Images">
        <div className="splide__arrows" />Í
        <SplideSlide>
          <img src={heroImage.src} alt="Image 1" />
          <h1 className={classes.styleh1}>
            Motivated teams bonded with strong alliances <br /> can push the
            boundaries of imaginations
          </h1>
        </SplideSlide>
        <SplideSlide>
          <img src={image2.src} alt="Image 2" />
          <h1 className={classes.styleh1}>
            Motivated teams bonded with strong alliances <br /> can push the
            boundaries of imaginations
          </h1>
        </SplideSlide>
        <div className="splide__arrows" />
      </Splide>
    </div>
  );
}

export default Slider;
