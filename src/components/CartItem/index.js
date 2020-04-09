import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import DateTimePicker from "react-datetime-picker";
import {changeQuantity} from '../../store/shoppingcart/actions'

export default function CustomerDetails(props) {
  const [quantity, set_quantity] = useState(props.quantity);
  const totalPrice = props.price * quantity;
  const [price, set_price] = useState(totalPrice)
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const handleTime = (event) => {
    setDate(event);
    console.log(event);
  };

  function updateQuantity(event) {
    set_quantity(event.target.value)
    set_price(event.target.value * props.price)
  }

const clickHandler = () => {
  console.log(props.id, quantity)
  dispatch(changeQuantity(props.id, quantity));
}

useEffect(() => {
  
},[dispatch])

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.service.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Quantity:{" "}
          <form onSubmit={() => clickHandler()}>
            <input
              value={quantity}
              onChange={(event) => updateQuantity(event)}
              type="number"
              min="1"
            />
            <button type="submit">Update</button>
          </form>
        </li>
        <li className="list-group-item">Price €: {price}</li>
        <li className="list-group-item">Schedule the service 24/7</li>
        <DateTimePicker onChange={(date) => handleTime(date)} value={date} />
      </ul>
    </div>
  );
}
