import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
  //   console.log("props", props);
  return (
    <div>
      {props.list.map((el, i) => (
        <ProductCard item={el} key={i} alertFunction={props.alertFunction} />
      ))}
    </div>
  );
};

export default ProductList;