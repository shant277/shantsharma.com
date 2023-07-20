import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Projects from "./pages/Projects.js";
import Summary from "./pages/Summary";
import * as Constants from "./constants/Constants";

const summary = Constants.summary;
const projects = Constants.projects;

function App() {
  return (
    <div className="App">
      <h1> </h1>
      <h1>My Portfolio</h1>

      <Navbar />
      <Summary summary={summary}></Summary>
      <Projects projects={projects}></Projects>

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
