import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import CarouselEffet from "../../Components/Carousel/CarouselEffet";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Produt/Product";

function Landing() {
  return (
    <div>
      <LayOut>
        <CarouselEffet />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
}

export default Landing;
