import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPointsUrl";
import ProdutCard from "../../Components/Produt/ProdutCard";
import classes from "./Results.module.css";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  //dynami routing;

  useEffect(() => {
    axios
      .get(`${producturl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => console.log(err)),
      [];
  });

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
              <ProdutCard
                key={id}
                produt={singleprodut}
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
