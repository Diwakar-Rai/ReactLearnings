import React, { useState } from "react";
import PRODUCTS from "./Products.json";
export default function ProductDisplayFunc() {
  let [products, setProducts] = useState(PRODUCTS);
  return (
    <>
      <section className="mainBlock">
        <article>
          {products.map(product => {
            return (
              <main className="container">
                <figure>
                  <img src={product.image} alt={product.title} />
                </figure>
                <aside>
                  <h1>{product.title.slice(0, 20) + "..."}</h1>
                  <p className="category">
                    <span className="left">{product.id}</span>
                    <span className="center">{product.category}</span>
                    <span className="right">{product.rating.rate}</span>
                  </p>
                  <p className="price">
                    <span>
                      &#x20B9; <span>{product.price}</span>
                    </span>
                  </p>
                        <p className="desc">{product.description.slice(0, 30) + "..."}</p>
                        <p className="btnParent">
                            <button>See More</button>
                        </p>
                </aside>
              </main>
            );
          })}
        </article>
      </section>
    </>
  );
}
