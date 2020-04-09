import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShoppingCartById,
  orderPlaced,
} from "../../store/shoppingcart/actions";
import {
  selectShoppingCart,
  selectTotalAmount,
} from "../../store/shoppingcart/selectors";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CustomerDetails from "../../components/CustomerDetails";
import CartItem from "../../components/CartItem";

export default function Checkout() {
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectShoppingCart);
  const totalAmount = useSelector(selectTotalAmount);

  useEffect(() => {
    dispatch(fetchShoppingCartById());
  }, [dispatch]);

  const placeOrder = () => {
    dispatch(orderPlaced());
    setOrder("Thank you for ordering!");
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <CustomerDetails />
          <div
            style={{
              margin: "1rem",
            }}
          >
            <h3>Total €: {totalAmount}</h3>
            <Button onClick={placeOrder}>Place order and pay cash later</Button>
          </div>
        </div>
        <div class="col-md-8">
          {order === "" ? <h2>My cart:</h2> : <h2>{order}</h2>}
          <div class="container" style={{ display: "flex", flexWrap: "wrap" }}>
            {shoppingCart.map((cart) => {
              return (
                <div class="row">
                  <div
                    class="col-md-4"
                    style={{
                      margin: "1rem",
                    }}
                  >
                    <CartItem
                      key={cart.id}
                      service={cart.service.name}
                      price={cart.service.price}
                      image={cart.service.imageUrl}
                      quantity={cart.quantity}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
