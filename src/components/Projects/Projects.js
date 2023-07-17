import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import android from "../../Assets/Projects/android.png";
import emotion from "../../Assets/Projects/emotion.png";
import dbms from "../../Assets/Projects/dbms.png";
import keyb from "../../Assets/Projects/keyb.png";
import sack from "../../Assets/Projects/SACK.JPG";
import bitsOfCode from "../../Assets/Projects/fw.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on university.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyb}
              isBlog={false}
              title="Cast Type"
              description="I developed MERN E-commerce website for mechanical keyboards, utilizing React.js for the frontend, Express.js (built on top of Node.js) for the backend, and MongoDB for the database. The application includes features such as Redux for state management and React Styled Components for UI design. I created REST APIs using Express to facilitate communication between the frontend and backend, enabling efficient addition, updating, and deletion of data. Additionally, I integrated the Stripe API (sandbox) for secure credit card transactions and payment processing."
              ghLink="https://github.com/Matthew-Gallardo/MERN-E-Commerce-for-Mechanical-Keyboards.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Open Source Freedom Wall"
              description="I developed a MERN Freedom Wall website specifically designed for CS students. The application was built using React.js for the frontend, Node.js for the backend, and MongoDB for the database. To facilitate communication between the frontend and backend, I implemented a REST API using the Express framework in Node.js. This allowed seamless interaction with the MongoDB database for efficient data storage and retrieval. For state management in the frontend, I utilized React Hooks and the Context API, ensuring an optimized and streamlined user experience."
              ghLink="https://github.com/Matthew-Gallardo/CompScie-FreedomWall.git"
              demoLink="https://opensourcefw.herokuapp.com/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="EasyPC Database Management System"
              description="I developed an EasyPC-inspired inventory and Point of Sales (PoS) system using Java. The system includes a graphical user interface (GUI) built with Java Swing, allowing users to interact with the application seamlessly. For efficient data storage and retrieval, I integrated MySQL as the backend database. The system is designed to handle inventory tracking, product management, and sales processing, providing a comprehensive solution for managing the EasyPC inventory and facilitating smooth PoS operations."
              ghLink="https://github.com/Matthew-Gallardo/Database-PoS-Inventory-System-for-EasyPc.git"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="VoxTunesAI"
              description="I developed an Android app in Android Studio, utilizing speech recognition technology to enhance the user experience of music players on Android devices. The app is programmed using Java , and Android Studio's tools and resources were utilized to create an intuitive user interface. VoxTunes AI allows users to control music playback by speaking commands, eliminating the need for physical buttons or touchscreens. By leveraging the Android Speech Recognition API, the app converts spoken commands into text and performs the desired actions within the music player."
              ghLink="https://github.com/Matthew-Gallardo/Android-Voice-Controlled-Music-Player.git"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sack}
              isBlog={false}
              title="SackCal- Knapsack Problem Calculator"
              description="Web-based Knapsack problem calculator,  an interactive tool to solve the Knapsack problem with ease. Allowing users to input the weights and values of items, as well as the weight capacity of the knapsack. Using the brute force approach and dynamic programming, the calculator efficiently determines the optimal subset of items to maximize the total value within the weight constraint.
              It displays the maximum achievable value and the selected items that should be included in the knapsack. This tool enables users to explore different scenarios, experiment with different item weights and values, and observe the impact on the overall solution."
              ghLink="https://github.com/Matthew-Gallardo/Bruteforce-Knapsack-Algorithm.git"
              demoLink="https://bruteforce-knapsack-algorithm.vercel.app/"
              
            />
          </Col>
         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
