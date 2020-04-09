import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Service from "../components/Service";
import { fetchServices } from "../store/services/actions";
import { selectServices } from "../store/services/selectors";

export default function ServicesPage() {
  const [filters, setFilters] = useState([]);
  const [isChecked, setChecked] = useState({});
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  //console.log("filters", filters);
  const filterServices = services.filter((service) =>
    filters.includes(service.category.name)
  );
  //console.log("filtered services", filterServices);
  const categories = [
    ...new Set(services.map((service) => service.category.name)),
  ];

  const handleChange = (event) => {
    setChecked({ ...isChecked, [event.target.name]: event.target.checked });
    event.target.checked === true
      ? setFilters([...filters, event.target.name])
      : setFilters(filters.filter((filter) => filter !== event.target.name));
  };

  return (
    <>
      <h1></h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="position-fixed">
              <Jumbotron>
                <h3>Choose category:</h3>
                {categories.map((category) => (
                  <form>
                    <label>
                      {category}{" "}
                      <input
                        name={category}
                        type="checkbox"
                        checked={isChecked[category]}
                        onChange={handleChange}
                      />
                    </label>
                  </form>
                ))}
              </Jumbotron>
            </div>
          </div>
          <div class="col-sm-8">
            {filterServices.map((service) => (
              <Container key={service.id}>
                <Service
                  name={service.name}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  price={service.price}
                  id={service.id}
                />
              </Container>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
