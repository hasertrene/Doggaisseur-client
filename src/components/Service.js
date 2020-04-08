import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";
import { addService } from "../store/shoppingcart/actions";

export default function Service(props) {
  const dispatch = useDispatch();
  return (
    <Jumbotron>
      <img src={props.imageUrl} width="50%" alt="imageUrl" />
      <br />
      <br />
      <Button
        variant="success"
        onClick={() => dispatch(addService(props.id, 1))}
      >
        Add to cart
      </Button>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>€ {props.price}</p>
    </Jumbotron>
  );
}
