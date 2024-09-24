import React from "react";
import { Link } from "react-router-dom";
import "./CategoryImages.js";
import classes from "./Category.module.css";

function CategoryCrd({ data }) {
  //const { id, title, image } = data;

  //console.log(data.category);
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.category}`}>
        {/*//data.name*/}
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCrd;
