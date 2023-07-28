import Projects from "../projects/Projects.js";
import { projects, skills } from "../../constants/Constants";
import { Header } from "../../components/navbar/headerNavBar";
import SummaryContainer from "../summary/SummaryContainer";
import Skills from "../skills/skills.js";
import TopNavbar from "../../components/navbar/TopNavbar.js";
import TopButton from "../../components/TopButton/TopButton.js";

import "../../App.css";

function HomePage() {
  return (
    <div className="App">
      <TopNavbar />
      <Header />

      <div className="title">
        <h1>Shant Sharma</h1>
        <h4>Software Developer</h4>
      </div>

      <SummaryContainer />

      <div className="wrapper-container">
        <Projects projects={projects}></Projects>

        <div className="education-container" id="education">
          <h2 className="info-card">Education</h2>
          <h3>Bachelor of Science in Computer Science</h3>
          <li>Minor in History</li>
        </div>
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
      <TopButton/>
    </div>
  );
}
export default HomePage;
