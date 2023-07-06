import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";

const summary = [
  "Hi, I'm Shant Sharma, a software developer from Edmonton, Alberta. Here's a bit of info about me: ",
  "Graduated from Macewan University with a degree in Computer Science",
  "Developed an IoT monitoring system that uses several physical sensors to track blood pressure, heart rate, and temperature and displays it on a mobile application as a final project for my program",
  "Developed a python keyword syllabi search program in my spare time to help count the frequencies of specified keywords in a given list, then displayed that information graphically",
  "Developed a property value search program in Java with a partner for a school project. Included built-in google maps functionality as well the capability to search through a list containing hundreds of thousands of values in a timely manner,",
  "Coursework mainly covered C and Python programming, embedded systems, networking, using security, intrusion prevention and detection tools",
  "Has experience with web development, frontend and backend",
];

const restOf = summary.slice(1);

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>

      <Routes>
        <Route path="/"  element={<Projects />} >
        
        </Route>
      </Routes>

      <Navbar />

      <div
        className="Summary"
        id="summary"
      >
        <section id="about">
          <h2>About Me</h2>
          <p>
            {summary[0]}
            {/* Print out rest of summary string array */}
            {restOf.map((line) => (
              <li>{line}</li>
            ))}
          </p>
        </section>
      </div>

      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>

          <h3>Project 2</h3>
          <p>Description of project 2.</p>

          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </ul>
      </section>

      <div className="Skills" id="skills">
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>React</li>
            <li>Dart/Flutter</li>
            <li>Arduino Programming Language</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </section>
      </div>
      {/* Contact me section will be have connection to a database one day */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 Shant Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
