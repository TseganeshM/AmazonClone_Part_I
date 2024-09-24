import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BiCartDownload } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import Nav_logo from "../../assets/nav_logo.png";
import classes from "./Header.module.css";
import { DataContet } from "../DataProider/DataProrider";
import LowerHeader from "./Lower_Header";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContet);
  //console.log(basket.length);
  return (
    <section className={classes.fixed}>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={Nav_logo} alt="amazon_logo" />
          </Link>
          {/*Deliery*/}
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline />
            </span>
            <div>
              <p>Deliery to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/*.search*/}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search Product"></input>{" "}
          <IoSearch size={25} />
        </div>
        {/*order*/}
        <div className={classes.order_container}>
          <Link to="/" className={classes.language}>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png"
              alt="flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          {/*Sign in*/}
          <Link to="/autho" className={classes.signIn}>
            <p>Hello, sign in</p>
            <select name="" id="">
              <option value="">Account & Lists</option>
            </select>
          </Link>
          {/*Returns*/}
          <Link to="/" className={classes.returns}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/*Cart*/}
          <Link to="/cart" className={classes.cart}>
            <BiCartDownload size={45} />
            <span>{basket.length}</span>Cart
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
