import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    height: 100%;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  // console.log(cart, "CART");

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />

      <div className="link-container">
        <Link to="/products" className="link-btn">
          Cointinue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          celar shopping cart
        </button>
        <CartTotals />
      </div>
    </Wrapper>
  );
};

export default CartContent;
