import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShoppingCartById,
  orderPlaced,
} from "../../store/shoppingcart/actions";
import { selectShoppingCart } from "../../store/shoppingcart/selectors";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerDetails from "../../components/CustomerDetails";
import CartItem from "../../components/CartItem";

export default function Checkout() {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectShoppingCart);

  useEffect(() => {
    dispatch(fetchShoppingCartById());
  }, [dispatch]);

  return (
    <div>
      <h1>Checkout Page, awesome!</h1>
      <Container>
        What's in my cart:
        {shoppingCart.map((cart) => {
          return (
            <CartItem
              key={cart.id}
              service={cart.service.name}
              price={cart.service.price}
              image={cart.service.imageUrl}
            />
          );
        })}
        Total €:
      </Container>
      <Container>
        <CustomerDetails />
      </Container>
      <Button onClick={() => dispatch(orderPlaced())}>Place order</Button>
    </div>
  );
}
