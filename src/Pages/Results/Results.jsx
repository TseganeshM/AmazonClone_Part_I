import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  //dynami routing;

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h2 style={{ padding: "30px" }}>Results</h2>
        <p style={{ padding: "30px" }}>category: {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.product_container}>
            {results?.map((singleprodut, id) => (
              <ProductCard
                key={id}
                product={singleprodut}
                renderDisprit={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
