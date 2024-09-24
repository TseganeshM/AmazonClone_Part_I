import React from "react";
import numeral from "numeral";
const Curreny = ({ amount }) => {
  const formatAmount = numeral(amount).format("$0,0.00");
  return <div>SubTotal_Price: {formatAmount}</div>;
};

export default Curreny;
