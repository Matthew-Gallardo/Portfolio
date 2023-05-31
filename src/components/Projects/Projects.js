import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import android from "../../Assets/Projects/android.png";
import emotion from "../../Assets/Projects/emotion.png";
import dbms from "../../Assets/Projects/dbms.png";
import keyb from "../../Assets/Projects/keyb.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="CompScie Freedom Wall"
              description="I developed a MERN Freedom Wall website specifically designed for CS students. The application was built using React.js for the frontend, Node.js for the backend, and MongoDB for the database. To facilitate communication between the frontend and backend, I implemented a REST API using the Express framework in Node.js. This allowed seamless interaction with the MongoDB database for efficient data storage and retrieval. For state management in the frontend, I utilized React Hooks and the Context API, ensuring an optimized and streamlined user experience."
              ghLink="https://github.com/Matthew-Gallardo/CompScie-FreedomWall.git"
              demoLink="https://chatify-49.web.app/"
              
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
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
