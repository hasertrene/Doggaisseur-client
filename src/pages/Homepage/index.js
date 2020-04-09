import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "../../App.css";

export default function Homepage() {
  return (
    <div>
      <Jumbotron
        style={{
          textAlign: "center",
          backgroundColor: "rgba(239,255,222, 0.4)",
        }}
      >
        <h1 style={{ marginBottom: "2rem", fontFamily: "'Cinzel', serif" }}>
          Doggaisseur
        </h1>
        <p>Where dog is king</p>
      </Jumbotron>
      <Container style={{ display: "flex" }}>
        <img
          src="https://pics.me.me/guide-to-doggos-shattered-earthcom-doggo-pupper-pupperino-fluffer-woofer-56768312.png"
          atl="good boi"
          style={{ width: "23rem" }}
        />
        <h3
          style={{
            padding: "3rem",
            lineHeight: "4rem",
            fontFamily: "'Dosis', sans-serif",
          }}
        >
          Is your dog the love of your life? Does it bring you happiness, treat
          you well, like the good boi it is? <br /> Show your doggo, pupper,
          pupperino, fluffer, woofer, subwoofer, blop, or <strong>BORK</strong>{" "}
          some love and stop by at Doggaisseur, today!
        </h3>
      </Container>
      <div style={{ textAlign: "center", fontSize: "1.3rem", padding: "4rem" }}>
        Check out our services or leave us some feedback! We love to hear back
        from you and meet your furry friend soon!
      </div>
    </div>
  );
}
