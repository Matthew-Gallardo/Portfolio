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
            <br />
            <br /> I am a <span className="purple">Computer Science </span> Student @ Polytechnic University of the Philippines Sta. Mesa Manila
            <br />
            Currently a <span className="purple">Commission on Higher Education (CHED) </span> and <span className="purple">Quezon City Youth Development</span> Scholar
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
           I have also gained experience as a Software Engineer Intern at <span className="purple">Baytech BPO Corporation</span>. August 2023- September 2023
          </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Movies and TV Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleep
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "If you want to win the lottery you've got to make money to get a ticket."{" "}
          </p>
          
          <footer className="blockquote-footer"><span className="purple">Lou Bloom </span> | Nightcrawler (2014) </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

