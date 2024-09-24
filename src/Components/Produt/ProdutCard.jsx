import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Curreny from "../Curreny/Curreny";
import classes from "./Product.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DataContet } from "../DataProider/DataProrider";
import { Type } from "../../Utility/action.type";

function ProdutCard({ produt, flex, renderDisprit, renderAdd }) {
  const { id, title, price, image, rating, description } = produt;

  const [state, dispatch] = useContext(DataContet);

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
          <Curreny amount={price} />
        </div>
        {renderAdd && (
          <Button className={classes.button} onClick={addtoCart}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProdutCard;
