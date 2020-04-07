import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Service from "../components/Service";
import { fetchServices } from "../store/services/actions";
import { selectServices } from "../store/services/selectors";

export default function ServicesPage() {
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  return (
    <>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      {services.map((service) => (
        <Container key={service.id}>
          <Service
            name={service.name}
            description={service.description}
            imageUrl={service.imageUrl}
            price={service.price}
          />
        </Container>
      ))}
    </>
  );
}
