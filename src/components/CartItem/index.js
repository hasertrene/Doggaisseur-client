import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import DateTimePicker from "react-datetime-picker";

export default function CustomerDetails(props) {
  const [quantity, set_quantity] = useState(props.quantity);
  const totalPrice = props.price * quantity;
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const handleTime = (event) => {
    setDate(event);
    console.log(event);
  };

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
            value={quantity}
            onChange={(event) => set_quantity(event.target.value)}
            type="number"
            min="1"
          />
        </li>
        <li className="list-group-item">Price €: {totalPrice}</li>
        <li className="list-group-item">Schedule the service:</li>
        <DateTimePicker onChange={(date) => handleTime(date)} value={date} />
      </ul>
    </div>
  );
}
