import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";

function CarouselEffet() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItem, id) => {
          return <img src={imageItem} key={id} />;
        })}
      </Carousel>
      <div className="courosol_img"></div>
    </div>
  );
}

export default CarouselEffet;
