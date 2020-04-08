import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function CustomerDetails() {
  const user = useSelector(selectUser);

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
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">My Dog: {user.dog}</li>
      </ul>
    </div>
  );
}
