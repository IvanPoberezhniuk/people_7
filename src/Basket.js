import React from "react";

class Basket extends React.Component {
  renderLi = (name, id, count = "") => {
    return (
      <li key={id}>
        {name} {count}
        <button
          onClick={() => {
            this.props.removeFromCart(name);
          }}
        >
          x
        </button>
      </li>
    );
  };

  render() {
    return (
      <section>
        <p>Shopping Cart</p>
        <ul>
          {this.props.basketItems.map(item =>
            this.renderLi(item.name, item.id)
          )}
        </ul>
      </section>
    );
  }
}

export default Basket;
