import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Service from "../components/Service";
import { fetchServices } from "../store/services/actions";

export default function ServicesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return (
    <>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <Container>
        <Service />
      </Container>
    </>
  );
}
