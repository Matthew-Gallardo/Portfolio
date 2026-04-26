import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiVisualstudio,
  DiAndroid,
} from "react-icons/di";
import {
  SiPostman,
  SiJupyter,
  SiGooglecolab,
  SiGithub,
} from "react-icons/si";

const tools = [
  { label: "Git", Icon: DiGit },
  { label: "Postman", Icon: SiPostman },
  { label: "VS Code", Icon: DiVisualstudio },
  { label: "Jupyter Notebook", Icon: SiJupyter },
  { label: "Google Colab", Icon: SiGooglecolab },
  { label: "Android Studio", Icon: DiAndroid },
  { label: "GitHub", Icon: SiGithub },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {tools.map(({ label, Icon }) => (
            <div key={label} className="tech-icons" style={{ minWidth: "110px" }}>
              <Icon />
              <p style={{ marginTop: "0.65rem", marginBottom: 0, fontSize: "0.95rem" }}>{label}</p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
