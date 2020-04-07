import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { FiShoppingCart } from "react-icons/fi";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* Cant login yet, so see if it works later */}
      {/* <div style={{ padding: ".5rem 1rem" }}>
            <FiShoppingCart /> <span>1</span> <Button>Check Out</Button>
          </div> */}
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.name}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
