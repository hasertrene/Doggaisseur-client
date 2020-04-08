import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { postCommentThunk } from "../../store/feedback/actions";

export default function CommentForm() {
  const token = useSelector(selectToken);
  const [comment, setComment] = useState("");
  const [serviceId, setServiceId] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(text, radio);

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
          style={{
            width: "80%",
            height: "30vh",
          }}
        />
      </Form.Group>
      <Form.Group
        value={serviceId}
        onChange={(event) => setServiceId(event.target.id)}
      >
        <Form.Label>
          <h4>What service did you choose?</h4>
        </Form.Label>
        <Form.Check
          type="radio"
          label="Service 1"
          id="11"
          name="formHorizontalRadios"
        />
        <Form.Check
          type="radio"
          label="Service 2"
          id="2"
          name="formHorizontalRadios"
        />
        <Form.Check
          type="radio"
          label="Service 3"
          id="3"
          name="formHorizontalRadios"
        />
      </Form.Group>

      <Button
        variant="outline-success"
        // style={{ marginTop: "-10rem" }}
        type="submit"
      >
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
