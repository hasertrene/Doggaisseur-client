import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

// import { selectToken } from "../../store/user/selectors";
import CommentForm from "./CommentForm";

export default function Feedback() {
  // const token = useSelector(selectToken);
  // console.log("token", token);

  return (
    <Container>
      <h1
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        We love to hear from you!
      </h1>

      <div
        style={{
          width: "100%",
          height: "70vh",
          backgroundColor: "#E1FFCC",
          marginBottom: "2rem",
          overflow: "scroll",
          border: "1px solid #BCE8BA",
        }}
      >
        {/* leave only 1 div so map over. Its just so we all see what the end product will look like :) */}
        <div
          style={{
            border: "2px solid black",
            width: "70%",
            float: "right",
            margin: "1rem",
            borderRadius: "15px",
            padding: ".5rem",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          <p>
            Karen <span style={{ float: "right" }}>time</span>
          </p>
          <p>This is great, really amazing!</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        {/* <textarea
          style={{
            width: "80%",
            height: "30vh",
            marginRight: "2rem",
          }}
        />
        <Button variant="outline-success" style={{ marginTop: "-10rem" }}>
          Post comment
        </Button> */}
        <CommentForm />
      </div>
    </Container>
  );
}
