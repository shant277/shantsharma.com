import { projects, languages, links, technologies } from "../../constants/Constants.js";
import { Header } from "../../components/navbar/headerNavBar.js";
import SummaryContainer from "../summary/SummaryContainer.js";
import Languages from "../skills/Languages.js";
import Technologies from "../skills/Technologies.js";
import TopNavbar from "../../components/navbar/TopNavbar.js";
import TopButton from "../../components/TopButton/TopButton.js";
import Education from "../Education/Education.js";
import TimeLineProject from "../projects/timeLineProject.js";
import { Link } from "react-router-dom";
import RedirectButtons from "../Redirects/RedirectButtons.js";

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

      <RedirectButtons urls={links} />
      <SummaryContainer />

    
      <div className="wrapper-container">
        <div className="inner-wrapper">
          <div class="timelines" id="projects">
            <TimeLineProject projects={projects}></TimeLineProject>
          </div>
          <Link to="/projectDescription" className="project-button" id="project-link">
          <div id="translate"></div>
              <a href="/">Detailed project descriptions</a>
          </Link>
        </div>
        <Education />
      </div>
      <div className="skills-container">
        <h3 className="skills-title">Skills</h3>
      <Languages Languages={languages}></Languages>
      <Technologies Technologies={technologies}></Technologies>
      </div>

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
        <a
          href="https://www.freepik.com/icon/pineapple_2060146#fromView=search&term=pineapple&page=1&position=14"
          target="_blank"
          rel="noreferrer"
        >
          Icon by Freepik
        </a>
      </footer>
      <TopButton />
    </div>
  );
}
export default HomePage;
