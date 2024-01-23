import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import android from "../../Assets/Projects/android.png";
import thesis from "../../Assets/Projects/thesis.png";
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
              description="I built a MERN e-commerce site for mechanical keyboards, using React.js for the frontend, Express.js (Node.js) for the backend, and MongoDB for the database. The application includes Redux for state management, React Styled Components for UI, and integrates the Stripe API for secure transactions. REST APIs in Express handle data operations."
              ghLink="https://github.com/Matthew-Gallardo/MERN-E-Commerce-for-Mechanical-Keyboards.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Open Source Freedom Wall"
              description="I created a MERN Freedom Wall website for CS students, employing React.js for the frontend, Node.js for the backend, and MongoDB for the database. The communication is facilitated by a REST API using Express. React Hooks and the Context API manage state for an optimized user experience."
              ghLink="https://github.com/Matthew-Gallardo/CompScie-FreedomWall.git"
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="EasyPC Database Management System"
              description="I created an inventory and Point of Sales (PoS) system inspired by EasyPC using Java. The graphical user interface (GUI) is built with Java Swing for seamless user interaction. MySQL serves as the backend database for efficient data storage and retrieval. The system manages inventory tracking, product management, and sales processing, offering a comprehensive solution for EasyPC inventory management and PoS operations."
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
              description="I developed a web-based Knapsack problem calculator, an interactive tool for easily solving the problem. Users input item weights, values, and knapsack capacity. Utilizing brute force and dynamic programming, the calculator efficiently determines the optimal item subset, maximizing total value within the weight constraint. It displays the maximum achievable value and selected items, allowing users to explore scenarios, experiment with weights and values, and observe the solution's impact."
              ghLink="https://github.com/Matthew-Gallardo/Bruteforce-Knapsack-Algorithm.git"
              demoLink="https://bruteforce-knapsack-algorithm.vercel.app/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={thesis}
              isBlog={false}
              title="Illuscan-Detection of GAN Generated Images using Spatial-Frequency Fusion Data"
              description="We developed a thesis project focused on enhancing GAN-generated image detection. The study introduces a spatial-frequency domain fusion approach, combining Discrete Wavelet Transform (DWT) in the frequency domain and Local Binary Pattern (LBP) in the spatial domain.Utilizing Support Vector Machine as classifier. The motivation stems from concerns about potential misuse of synthetic images. The novel approach demonstrated promising results with 87.50% accuracy, 80.25% recall, 86.52% F-measure, and 93.85% precision. The model achieved 97.67% accuracy for Generated Objects, 90.67% for Generated Faces, 82.33% for Generated Animals, and 79.33% for Generated Scenes. This research contributes to the development of precise GAN detection methods, advancing the fields of computer vision and digital forensics. Explore the effectiveness of our spatial-frequency domain fusion data technique in improving GAN-generated image detection."
              ghLink="https://github.com/Deynnnyellll/Detection-of-GAN-Generated-Images-using-Spatial-Frequency-Domain-Fusion-Data"
              
            />
          </Col>
         
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
