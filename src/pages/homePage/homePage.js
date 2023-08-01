import { projects, skills } from "../../constants/Constants.js";
import { Header } from "../../components/navbar/headerNavBar.js";
import SummaryContainer from "../summary/SummaryContainer.js";
import Skills from "../skills/skills.js";
import TopNavbar from "../../components/navbar/TopNavbar.js";
import TopButton from "../../components/TopButton/TopButton.js";
import Education from "../Education/Education.js";
import TimeLineProject from "../projects/timeLineProject.js";
import { Link } from "react-router-dom";

import "../../App.css";
import "./homePage.css";

function HomePage() {
  return (
    <div className="App">
      <TopNavbar />
      <Header />

      <div className="title">
        <h1 class="name">Shant Sharma</h1>
        <h2 class="job-title">Software Developer</h2>
      </div>

      <SummaryContainer />

      <div className="wrapper-container">
        <div className="inner-wrapper">
          <div class="timelines" id="projects">
            <TimeLineProject projects={projects}></TimeLineProject>
            <Link to="/projectDescription" className="project-link">Detailed project Descriptions</Link>
          </div>
        </div>
        <Education />
      </div>

      <Skills skills={skills}></Skills>
      {/* Contact me section will have connection to a database one day */}
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
      <TopButton />
    </div>
  );
}
export default HomePage;
