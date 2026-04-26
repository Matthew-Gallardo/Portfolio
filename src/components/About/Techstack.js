import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiPython,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaServer,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiGraphql,
  SiApachekafka,
  SiPostgresql,
  SiAmazonaws,
  SiArgo,
  SiDatadog,
  SiKibana,
  SiLiquibase,
  SiVuedotjs,
  SiJest,
  SiJunit5,
  SiPlaywright,
} from "react-icons/si";

const stackGroups = [
  {
    title: "Programming Languages",
    items: [
      { label: "Java", Icon: DiJava },
      { label: "Python", Icon: DiPython },
      { label: "JavaScript", Icon: DiJavascript1 },
      { label: "C", Icon: FaServer },
    ],
  },
  {
    title: "Backend & Enterprise Stack",
    items: [
      { label: "Spring Boot", Icon: SiSpringboot },
      { label: "Spring WebFlux", Icon: FaServer },
      { label: "GraphQL", Icon: SiGraphql },
      { label: "REST APIs", Icon: FaExchangeAlt },
      { label: "Hibernate", Icon: FaServer },
      { label: "Jakarta EE", Icon: FaServer },
      { label: "Microservices", Icon: FaServer },
    ],
  },
  {
    title: "Messaging & Event Streaming",
    items: [
      { label: "Apache Kafka", Icon: SiApachekafka },
      { label: "ActiveMQ", Icon: FaExchangeAlt },
    ],
  },
  {
    title: "Databases",
    items: [
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "MongoDB", Icon: DiMongodb },
      { label: "MySQL", Icon: DiMysql },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { label: "AWS", Icon: SiAmazonaws },
      { label: "Docker", Icon: FaDocker },
      { label: "Argo CD", Icon: SiArgo },
      { label: "Datadog", Icon: SiDatadog },
      { label: "Kibana", Icon: SiKibana },
      { label: "Liquibase", Icon: SiLiquibase },
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      { label: "React", Icon: DiReact },
      { label: "Vue.js", Icon: SiVuedotjs },
      { label: "HTML5", Icon: FaHtml5 },
      { label: "CSS3", Icon: FaCss3Alt },
    ],
  },
  {
    title: "Testing & Automation",
    items: [
      { label: "Jest", Icon: SiJest },
      { label: "JUnit", Icon: SiJunit5 },
      { label: "Playwright", Icon: SiPlaywright },
    ],
  },
];


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12}>
        {stackGroups.map((group) => (
          <div key={group.title} style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ marginBottom: "0.75rem" }}>{group.title}</h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              {group.items.map(({ label, Icon }) => (
                <div key={label} className="tech-icons" style={{ minWidth: "110px" }}>
                  <Icon />
                  <p style={{ marginTop: "0.65rem", marginBottom: 0, fontSize: "0.95rem" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
}

export default Techstack;
