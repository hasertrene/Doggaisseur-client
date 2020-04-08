import React, { useState } from "react";
import Card from "react-bootstrap/Card";

export default function CustomerDetails(props) {
  // const [amount, set_amount] = useState("1");

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="http://icon-library.com/images/sell-icon-png/sell-icon-png-21.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Service name: {props.service}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Amount: {props.quantity}{" "}
          {/* <input
            value={amount}
            onChange={(event) => set_amount(event.target.value)}
            type="number"
            min="1"
          /> */}
        </li>
        <li className="list-group-item">Price €: 123450</li>
      </ul>
    </div>
  );
}
