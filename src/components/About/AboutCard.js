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
            <br /> I graduated with a <span className="purple">Magna Cum Laude</span> degree in <span className="purple">Computer Science</span> from Polytechnic University of the Philippines Sta. Mesa Manila
            <br />
            A <span className="purple">Commission on Higher Education (CHED) </span> and <span className="purple">Quezon City Youth Development</span> Scholar
            <br />
            <br />
            I am currently working in <span className="purple">financial and banking technology</span> as a <span className="purple">backend developer</span>, with experience in <span className="purple">Java backend development</span>, <span className="purple">microservices architecture</span>, <span className="purple">secure banking systems</span>, and <span className="purple">production support</span>.
            <br />
            <br />
            My recent work includes the <span className="purple">Security Bank Mobile Application (SBAPP) Payments & Transfers Squad</span>, where I helped deliver and support core digital payment services such as <span className="purple">QRPH</span>, <span className="purple">InstaPay</span>, <span className="purple">PESONet</span>, and <span className="purple">Prepaid Mobile Reload</span>.
            <br />
            <br />
            I also contributed to the <span className="purple">end-to-end development</span> and <span className="purple">production release</span> of <span className="purple">PESONet payments</span>, led the <span className="purple">Prepaid Mobile Reload</span> feature as <span className="purple">primary POC</span>, and supported the rollout of <span className="purple">QRPH P2P payments</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games and Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Movies and TV Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleep
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)" }}>
            "Reach for the stars, so if you fall, you land on a cloud"{" "}
          </p>
          
          <footer className="blockquote-footer"><span className="purple">Kanye West</span> | Homecoming</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

