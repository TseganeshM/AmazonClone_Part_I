import React, { useEffect, useState } from "react";
import axios from "axios";
import ProdutCard from "./ProdutCard";
import Loader from "../Loader/Loader";
import classes from "./Product.module.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Fake Store API
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleprodut, id) => (
            <ProdutCard
              key={id}
              produt={singleprodut}
              renderAdd={true}
            ></ProdutCard>
          ))}
        </section>
      )}
    </>
  );
};

export default Product;
