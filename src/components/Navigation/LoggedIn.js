import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import { selectShoppingCart } from "../../store/shoppingcart/selectors";
import Nav from "react-bootstrap/Nav";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { fetchShoppingCartById } from "../../store/shoppingcart/actions";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectShoppingCart);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchShoppingCartById());
  }, [dispatch]);

  return (
    <>
      <div style={{ padding: ".5rem 1rem" }}>
        <FiShoppingCart /> <span>{cartItems.length}</span>{" "}
        <Button onClick={() => history.push("/checkout")}>Check Out</Button>
      </div>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>Hi, {user.name}</Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
