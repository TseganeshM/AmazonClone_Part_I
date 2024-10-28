import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProrvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDisprit, renderAdd }) {
  const { id, title, price, image, rating, description } = product;

  const [state, dispatch] = useContext(DataContext);

  const addtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, title, price, image, rating, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.produt_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDisprit && (
          <div style={{ maxWidth: "700px" }}>{description}</div>
        )}
        <div className={classes.ratting}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addtoCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
