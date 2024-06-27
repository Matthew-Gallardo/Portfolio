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
import camanava from "../../Assets/Projects/CAMANAVA.JPG";

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
              imgPath={thesis}
              isBlog={false}
              title="Illuscan-Detection of GAN Generated Images using Spatial-Frequency Fusion Data"
              description="Thesis study  focuses on GAN-generated image detection using a novel spatial-frequency domain fusion approach. This method combines Discrete Wavelet Transform (DWT) in the frequency domain with Local Binary Pattern (LBP) in the spatial domain and utilizes Support Vector Machine as a classifier. Motivated by concerns over synthetic image misuse, our approach achieved promising results: 87.50% accuracy, 80.25% recall, 86.52% F-measure, and 93.85% precision.This research advances GAN detection methods, benefiting computer vision and digital forensics."
              ghLink="https://github.com/Deynnnyellll/Detection-of-GAN-Generated-Images-using-Spatial-Frequency-Domain-Fusion-Data"
              tags={["Generative-Adversarial Networks", "Local Binary Pattert", "Discrete Wavelet Transform", "Support Vector Machine"]}
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={camanava}
              isBlog={false}
              title="Temperature Forecast and Prediction in CAMANAVA"
              description="Machine Learning model that predicts and forecasts temperature in Caloocan, Malabon, Navotas, and Valenzuela using Multiple-Linear Regression. Trained the model with temperature as the dependent variable and atmospheric pressure, humidity, cloudiness, weather condition, and wind speed as independent variables. The model, evaluated with MSE, MAE, and RMSE, effectively predicts temperatures for CAMANAVA"
              ghLink="https://github.com/Matthew-Gallardo/Temperature-Forecast-Prediction-in-CAMANAVA-using-Regression"
              tags={["Machine Learning Model", "Multiple Linear Regression", "Temperature Prediction and Forecast"]}
              
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keyb}
              isBlog={false}
              title="Cast Type"
              description=" MERN-based e-commerce site for mechanical keyboards, featuring a React.js frontend, Node.js backend, and MongoDB database. Integrated Redux for state management, Styled Components for UI, and Stripe API for secure transactions. Implemented REST APIs with Express.js."
              ghLink="https://github.com/Matthew-Gallardo/MERN-E-Commerce-for-Mechanical-Keyboards.git"
              tags={["MERN ", "E-commerce", "Redux", "Stripe API"]}
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Open Source Freedom Wall"
              description="MERN Freedom Wall website for CS students, employing React.js for the frontend, Node.js for the backend, and MongoDB for the database. The communication is facilitated by a REST API using Express. React Hooks and the Context API manage state for an optimized user experience."
              ghLink="https://github.com/Matthew-Gallardo/CompScie-FreedomWall.git"
              tags={["MERN", "REST API", "Hooks", "Context API"]}
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbms}
              isBlog={false}
              title="EasyPC Database Management System"
              description=" Java-based Inventory and Point of Sales (PoS) system modeled after EasyPC. It features a Java Swing GUI for smooth user interaction and uses MySQL as the backend database. The system handles inventory tracking, product management, and sales processing, providing a robust solution for EasyPC's inventory and PoS needs."
              ghLink="https://github.com/Matthew-Gallardo/Database-PoS-Inventory-System-for-EasyPc.git"
              tags={["Java", "MySQL", "Inventory Management", "PoS"]}
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="VoxTunesAI"
              description="Android app in Android Studio using Java, integrating speech recognition technology to enhance music player interactions on Android devices. VoxTunes AI enables users to control music playback through spoken commands, utilizing the Android Speech Recognition API to convert speech to text for seamless interaction without physical input."
              ghLink="https://github.com/Matthew-Gallardo/Android-Voice-Controlled-Music-Player.git"
              tags={["Java", "Android Studio", "Automation", "Speech Recognizer"]}
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sack}
              isBlog={false}
              title="SackCal- Knapsack Problem Calculator"
              description="web-based Knapsack problem calculator that allows users to input item weights, values, and knapsack capacity. Using brute force and dynamic programming techniques, the calculator efficiently determines the optimal item subset that maximizes total value within the weight constraint. It displays the maximum achievable value and selected items, enabling users to experiment with different scenarios and observe the solution's outcomes."
              ghLink="https://github.com/Matthew-Gallardo/Bruteforce-Knapsack-Algorithm.git"
              demoLink="https://bruteforce-knapsack-algorithm.vercel.app/"
              tags={["Knapsack-Problem", "Bruteforce", "Dynamic Programming"]}
              
            />
          </Col>
       
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
