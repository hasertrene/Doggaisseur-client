import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerDetails from "../../components/CustomerDetails";
import CartItem from "../../components/CardItem";

export default function Checkout() {
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
