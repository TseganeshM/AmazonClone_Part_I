import React from "react";
import { categoryInfo } from "./CategoryImages.js";
import CategoryCrd from "./CategoryCrd.jsx";
import classes from "./Category.module.css";

function Category() {
  return (
    <section className={classes.category_cointainer}>
      {categoryInfo.map((infos) => (
        <CategoryCrd data={infos} key={infos.id}></CategoryCrd>
      ))}
    </section>
  );
}

export default Category;
