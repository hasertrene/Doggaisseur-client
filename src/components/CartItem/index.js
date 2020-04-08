import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";

export default function CustomerDetails(props) {
  const [quantity, set_quantity] = useState(props.quantity);
  // const totalPrice = props.price * quantity;

  const dispatch = useDispatch();

  function updateQuantity() {
    const increment = props.quantity + 1;
    console.log("what is increment", increment);
    dispatch(increment);
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.service}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Quantity:{" "}
          <input
            value={props.quantity}
            // onChange={() => updateQuantity()}
            // {(event) => set_quantity(event.target.value)}
            type="number"
            min="1"
          />
        </li>
        <li className="list-group-item">Price €: {props.price}</li>
      </ul>
    </div>
  );
}
