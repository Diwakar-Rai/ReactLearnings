import React from "react";
import Product from "./Product";
const ListsProducts = props => {
  return (
    <div>
      {props.products.map(product => {
        return (
          <div className="container">
            <Product key={product.id} {...product} />
          </div>
        );
      })}
    </div>
  );
};

export default ListsProducts;
