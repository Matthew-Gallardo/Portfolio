import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Wakatime() {
  const badgeStyle = {
    transform: "scale(1.5)", 
    transformOrigin: "center",
  };

  return (
    <Container fluid>
      <Row className="justify-content-center" style={{ paddingBottom: "10px" }}>
        <Col xs={12} className="text-center">
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
           Time I <strong className="purple">Code</strong>
          </h1>
        </Col>
        <Col xs={12} className="text-center">
          <a href="https://wakatime.com/@b2669d32-a3af-4ca9-8282-45e48a42395b">
            <img 
              src="https://wakatime.com/badge/user/b2669d32-a3af-4ca9-8282-45e48a42395b.svg" 
              alt="Total time coded since Apr 19 2023"
              style={badgeStyle} 
            />
          </a>
        </Col>
        <Col xs={12} className="text-center" style={{ marginTop: "20px" }}>
          <figure style={{ margin: "0 auto" }}>
            <embed 
              src="https://wakatime.com/share/@MattG/013dd8d7-02cf-4cb1-ac50-8cd52de73048.svg"
              style={{ width: "100%", maxWidth: "600px", height: "auto" }}
            />
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Wakatime;
