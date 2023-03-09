import React from "react";
const Product = ({ id, image, title, description, rating }) => {
  return (
    <div>
      <figure>
        <img src={image} alt={title} />
      </figure>
    </div>
  );
};

export default Product;
