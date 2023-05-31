import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Matthew Gallardo </span>
            from <span className="purple"> Quezon City, Philippines.</span>
            <br /> I am Computer Science Student @Polytechnic University of the Philippines
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies / TV Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Ma2log
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "If you want to win the lottery you've got to make money to get a ticket."{" "}
          </p>
          <footer className="blockquote-footer">Lou Bloom -Nightcrawler (2014) </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
