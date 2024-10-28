import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProrvider";
import ProductCard from "../../Components/Product/ProductCard";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { FaSortUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Oops! No item in your Cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    renderDisprit={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <FaSortUp size={15} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <FaAngleDown size={15} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Total_Items:({basket?.length}items) </p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>Congratulations! This Order Contains a Gift</small>
            </span>
            <Link to="/payments">Continue to Chekout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
