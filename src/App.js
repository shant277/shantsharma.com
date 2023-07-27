import React from "react";
import Projects from "./pages/projects/Projects.js";
import { projects, skills } from "./constants/Constants";
import { Header } from "./components/navbar/headerNavBar";
import SummaryContainer from "./pages//summary/SummaryContainer";
import Skills from "./pages/skills/skills.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="title">
        <h1>Shant Sharma</h1>
        <h4>Software Developer</h4>
      </div>

      <SummaryContainer />
      <Projects projects={projects}></Projects>

      <div className="education-container" id="education">
        <h2 className="info-card">Education</h2>
        <h3>Bachelor of Science in Computer Science</h3>
        <li>Minor in History</li>
      </div>
      <Skills skills={skills}></Skills>
      {/* Contact me section will be have connection to a database one day */}
      <div>
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
      </div>
      <footer>
        <p>&copy; 2023 Shant Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
