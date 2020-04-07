import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCartById } from "../../store/shoppingcart/actions";
import { selectShoppingCart } from "../../store/shoppingcart/selectors";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerDetails from "../../components/CustomerDetails";
import CartItem from "../../components/CardItem";

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
        <CartItem />
        Total €:
      </Container>
      <Container>
        <CustomerDetails />
      </Container>
      <Button>Place order</Button>
    </div>
  );
}
