import { links } from "../../constants/Constants.js";
import SummaryContainer from "../summary/SummaryContainer.js";
import TopButton from "../../components/TopButton/TopButton.js";
import RedirectButtons from "../Redirects/RedirectButtons.js";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../constants/Constants.js";
import "./homePage.css";

function HomePage() {
  return (
    <motion.div
      className="App"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="title-wrapper">
        <div className="title">
          <h1 className="name">Shant Sharma</h1>
          <h2 className="job-title">Software Developer</h2>
        </div>
      </div>
       <div className="app-inner-wrapper">
      <RedirectButtons urls={links} />
      <SummaryContainer />
      </div>
      {/* Contact me section will have connection to a database one day */}
      {/*   <div>
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
        </div> */}
      <footer className="footer">
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
    </motion.div>
  );
}
export default HomePage;
