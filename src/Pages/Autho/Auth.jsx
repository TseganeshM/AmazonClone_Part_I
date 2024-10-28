import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import { auth } from "../../Utility/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { CircleLoader } from "react-spinners";
import { DataContet } from "../../Components/DataProider/DataProrider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({ signin: false, signup: false });
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContet);
  const navigate = useNavigate();
  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      //from firebase and auth use different methods
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signin: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signup: false });
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signup: false });
        });
    }
  };
  return (
    <section className={classes.login}>
      {/*logo*/}
      <div>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
            alt=""
          ></img>
        </Link>
      </div>
      {/*formd*/}
      <div className={classes.login_cotainer}>
        <p>Already hae Account? </p>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            className={classes.login_signin_btn}
            name="signin"
          >
            {loading.signin ? <CircleLoader size={15} /> : "Sign In"}
          </button>
        </form>
        <p>
          By Signing, you agree to Cloned Amazon's
          <br /> Conditions of Use and Privacy Notice.
        </p>
        <h4>New to Amazon?</h4>
        <hr />
        <button
          type="submit"
          onClick={authHandler}
          className={classes.login_register_btn}
          name="signup"
        >
          {loading.signup ? (
            <CircleLoader size={15} />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
