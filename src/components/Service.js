import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Jumbotron, Button } from "react-bootstrap";
import { addService } from "../store/shoppingcart/actions";

export default function Service(props) {
  const [select, setSelect] = useState("Add to cart");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addService(props.id, 1));
    setSelect("Added to cart");
  };
  return (
    <Jumbotron
      style={{
        backgroundColor: "rgba(239,255,222, 0.6)",
      }}
    >
      <div class="card" style={{ textAlign: "center" }}>
        <div class="border-0">
          <img
            src={props.imageUrl}
            alt="imageUrl"
            style={{ width: "50%", marginTop: "1rem" }}
          />
        </div>
        <div class="card-block px-2">
          <br />
          <h4 class="card-title">{props.name}</h4>
          <p class="card-text">{props.description}</p>

          <h5>€ {props.price}</h5>
          <Button
            style={{ marginBottom: "1rem" }}
            variant="success"
            onClick={handleClick}
          >
            {select}
          </Button>
        </div>
      </div>
    </Jumbotron>
  );
}
