import React from "react";
import classes from "./Category.module.css";
import CategoryCard from "./CategoryCard.jsx";
import { categoryInfo } from "./CategoryImages.jsx";

function Category() {
  return (
    <div className={classes.category_cointainer}>
      {categoryInfo?.map((infos, id) => (
        <CategoryCard data={infos} key={id}></CategoryCard>
      ))}
    </div>
  );
}

export default Category;
