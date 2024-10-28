import React, { useContext, useState } from "react";
import classes from "../../Pages/Paymment/Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";

import { DataContext } from "../../Components/DataProvider/DataProrvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../Api/axios";
import { PulseLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket?.reduce((prev, current) => {
    return current.price * current.amount + prev;
  }, 0);

  const [processing, setProcessing] = useState(false);

  //call the hooks
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [carderror, setCarderror] = useState(null);

  const handleChange = (e) => {
    e?.error?.message ? setCarderror(e?.error?.message) : setCarderror("");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);

      //1.setup Bakend
      const response = await axiosInstance({
        method: "POST",
        url: `payment/create?total=${total * 100}`,
      });
      //console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      //2. Clent side or react side confirmation;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      //3.after the confirmation --> order firestore database save, clear basket
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
      // empty the basket
      dispatch({
        type: Type.EMPTY_BASKET,
      });

      setProcessing(false);
      navigate("/orders", { state: { msg: "you have placed new Order" } });
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  return (
    <LayOut>
      {/*{/*Header*/}
      <div className={classes.payment_header}>Checkout ({totalItem}) Items</div>
      <hr />
      {/*paymentmethod*/}
      <section className={classes.payment}>
        {/*<address*/}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <hr />
          <div>
            {/*<div>{user.email}</div>*/}
            <div>user?.email</div>
            <div>123 golden street</div>
            <div>Hosanna,Ethiopia</div>
          </div>
        </div>
        <hr />
        {/*produt*/}
        <hr />
        <div className={classes.flex}>
          <h3>Review Items and Delivery Address</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard product={item} key={i} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/*Card form*/}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          {/*for payment we use stripe*/}
          <div className={classes.payment_card_container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order : {totalItem}Items</p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                </div>
                <button type="submit">
                  {processing ? (
                    <div className={classes.loading}>
                      <p>Please Wait</p>
                      <PulseLoader color="gray" size={12} />
                    </div>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </LayOut>
  );
}

export default Payment;
