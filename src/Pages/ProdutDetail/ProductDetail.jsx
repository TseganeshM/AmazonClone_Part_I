import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const [products, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={products}
          flex={true}
          renderDisprit={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
