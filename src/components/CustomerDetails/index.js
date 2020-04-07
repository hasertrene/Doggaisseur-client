import React from "react";
import Card from "react-bootstrap/Card";

export default function CustomerDetails() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://kansai-resilience-forum.jp/wp-content/uploads/2019/02/IAFOR-Blank-Avatar-Image-1.jpg"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Customer Details</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: Test Dummy</li>
        <li className="list-group-item">Address: Street #1</li>
        <li className="list-group-item">Email: test@test.com</li>
      </ul>
    </div>
  );
}
