import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { postCommentThunk } from "../../store/feedback/actions";
import { selectServices } from "../../store/services/selectors";

export default function CommentForm() {
  const token = useSelector(selectToken);
  const [comment, setComment] = useState("");
  const [serviceId, setServiceId] = useState("");
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  // console.log("services", services);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(comment, serviceId);

    dispatch(postCommentThunk(comment, serviceId));
    setComment("");
    setServiceId("");
  }

  const form = token ? (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          value={comment}
          style={{
            width: "80%",
            height: "30vh",
          }}
        />
      </Form.Group>
      <Form.Group onChange={(event) => setServiceId(event.target.value)}>
        <Form.Label>
          <h4>What service did you choose?</h4>
        </Form.Label>
        <Form.Control as="select" value={serviceId}>
          <option>Select service</option>
          {services.map((service) => (
            <option value={service.id} name={service.name}>
              {service.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="outline-success" type="submit">
        Post Comment
      </Button>
    </Form>
  ) : (
    <Link to="/login" className="text-success ">
      <h4 className="mx-auto my-2" style={{ width: "20rem" }}>
        Log in to comment
      </h4>
    </Link>
  );

  return <div>{form}</div>;
}
