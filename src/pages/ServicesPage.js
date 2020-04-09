import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Jumbotron, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Service from "../components/Service";
import { fetchServices } from "../store/services/actions";
import { selectServices } from "../store/services/selectors";

export default function ServicesPage() {
  const services = useSelector(selectServices);
  const [order, setOrder] = useState(services);
  console.log("order", order);
  const categories = [
    ...new Set(services.map((service) => service.category.name)),
  ];
  //console.log("categories", categories);
  const [filters, setFilters] = useState([
    "Cleaning",
    "Exercise",
    "School",
    "Leisure",
    "Hostel",
    "Special treatment",
  ]);
  const [isChecked, setChecked] = useState({
    Cleaning: true,
    Exercise: true,
    School: true,
    Leisure: true,
    Hostel: true,
    "Special treatment": true,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);
  //console.log("filters", filters);
  const filterServices = services.filter((service) =>
    filters.includes(service.category.name)
  );
  //console.log("filtered services", filterServices);

  const handleChange = (event) => {
    setChecked({ ...isChecked, [event.target.name]: event.target.checked });
    event.target.checked === true
      ? setFilters([...filters, event.target.name])
      : setFilters(filters.filter((filter) => filter !== event.target.name));
  };

  const sortHigher = services.sort((b, a) => a.price - b.price);
  const sortLower = services.sort((a, b) => a.price - b.price);
  return (
    <>
      <h1></h1>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div className="position-fixed">
              <Jumbotron>
                <h3>Choose category:</h3>
                {categories.map((category) => (
                  <form key={category.id}>
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
                <br />
                <label for="cars">Order by price: </label>
                <select id="prices">
                  <option value="select">select</option>
                  <option value="higher">Higher to lower</option>
                  <option value="lower" onChange={() => setOrder(sortLower)}>
                    Lower to higher
                  </option>
                </select>
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
