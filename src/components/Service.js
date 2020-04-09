import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";
import { addService } from "../store/shoppingcart/actions";

export default function Service(props) {
  const dispatch = useDispatch();
  return (
    <Jumbotron>
      <div class="card flex-row flex-wrap">
        <div class="card-header border-0">
          <img src={props.imageUrl} width="200" alt="imageUrl" />
        </div>
        <div class="card-block px-2">
          <br />
          <h4 class="card-title">{props.name}</h4>
          <p class="card-text">{props.description}</p>
          <p>€ {props.price}</p>
          <Button
            variant="success"
            onClick={() => dispatch(addService(props.id, 1))}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
}
