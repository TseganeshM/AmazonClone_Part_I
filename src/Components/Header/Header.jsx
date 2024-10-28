import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { BiCartDownload } from "react-icons/bi";
import Nav_logo from "../../assets/nav_logo.png";
import LowerHeader from "./Lower_Header";
import { DataContext } from "../DataProvider/DataProrvider";
import { auth } from "../../Utility/Firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      {/*<setion></setion>*/}
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
          <input type="text" name="" id="" placeholder="search Product"></input>
          <IoSearch size={23} />
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
          <Link to={!user && "/auth"} className={classes.signIn}>
            <div>
              {user ? (
                <>
                  <p>Welcome {user?.email?.split(`@`)[0]}</p>
                  <span
                    onClick={() => {
                      auth.signOut();
                    }}
                  >
                    Sign Out
                  </span>
                </>
              ) : (
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>
          {/*Returns*/}
          <Link to="/orders" className={classes.returns}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/*Cart*/}
          <Link to="/cart" className={classes.cart}>
            <BiCartDownload size={45} />
            <span>{totalItem}</span>Cart
          </Link>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
