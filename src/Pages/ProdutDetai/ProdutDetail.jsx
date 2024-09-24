import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { producturl } from "../../Api/endPointsUrl";
import axios from "axios";
import ProdutCard from "../../Components/Produt/ProdutCard";
import Loader from "../../Components/Loader/Loader";

function ProdutDetail() {
  const [products, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      }),
      [];
  });
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProdutCard
          produt={products}
          flex={true}
          renderDisprit={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProdutDetail;
