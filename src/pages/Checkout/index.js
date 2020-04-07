import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCardById } from "../../store/shoppingcard/actions";
import { selectShoppingCard } from "../../store/shoppingcard/selectors";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerDetails from "../../components/CustomerDetails";
import CartItem from "../../components/CardItem";

export default function Checkout() {
  const dispatch = useDispatch();
  const shoppingCard = useSelector(selectShoppingCard);

  useEffect(() => {
    dispatch(fetchShoppingCardById());
  }, [dispatch]);

  return (
    <div>
      <h1>Checkout Page, awesome!</h1>
      <Container>
        What's in my cart:
        <CartItem />
      </Container>
      <Container>
        <CustomerDetails />
      </Container>
      <Button>Place order</Button>
    </div>
  );
}
