import React, { Component } from "react";
import PRODUCTS from './Products.json'
export default class ProductDisplay extends Component {
  state = {
    product: PRODUCTS,
  };
  render() {
      return <section className="mainBlock">
          <article>
              <table className="table">
                  <thead>
                      <tr>
                          <td>id</td>
                          <td>image</td>
                          <td>title</td>
                          <td>price</td>
                          <td>description</td>
                          <td>category</td>
                          <td>rating</td>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.product.map(item => {
                          return (
                              <tr>
                                  <td>{ item.id}</td>
                                  <td><img src={item.image} alt={item.title} /></td>
                                  <td>{ item.title}</td>
                                  <td>{ item.price}</td>
                                  <td>{ item.description}</td>
                                  <td>{ item.category}</td>
                                  <td>{ item.rating.rate}</td>
                              </tr>
                          )
                      })}
                  </tbody>
              </table>
        </article>
    </section>;
  }
}
