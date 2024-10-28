import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch data from Fake Store API
    //setIsLoading(true);
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

  //if (isLoading) {
  //  return <div>Loading...</div>;
  //}

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleproduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleproduct}
                key={singleproduct.id}
              ></ProductCard>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
