import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Service(props) {
  return (
    <Jumbotron>
      <img src={props.imageUrl} width="50%" alt="imageUrl" />
      <Link to={`/cart/${userId}`}>
        <Button variant="light">Add to cart</Button>
      </Link>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>€ {props.price}</p>
    </Jumbotron>
  );
}
