import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <>
      <div style={{ padding: ".5rem 1rem" }}>
        <FiShoppingCart /> <span>1</span>{" "}
        <Button onClick={() => history.push("/checkout")}>Check Out</Button>
      </div>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>Hi, {user.name}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
