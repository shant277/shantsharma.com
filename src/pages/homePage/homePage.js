import { links } from "../../constants/Constants.js";
import SummaryContainer from "../summary/SummaryContainer.js";
/* import TopButton from "../../components/TopButton/TopButton.js"; */
import RedirectButtons from "../../components/Redirects/RedirectButtons.js";
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
      <div className="title-wrapper" style={{ textAlign: "center" }}>
        <div className="title">
          <h1 style={{ fontSize: "2em", paddingTop: "5rem" }}>
            {" "}
            Hi, my name is
          </h1>
          <h1 className="name">Shant Sharma.</h1>
          <h1 style={{ paddingBottom: "4rem" }}>I wanna build things.</h1>
          <p style={{ textAlign: "center", lineHeight: "1.5" }}>
            I am a recent Computer Science graduate from Macewan University, and
            an (aspiring) Software Developer looking to get into the industry. I
            am currently located in Edmonton, Alberta, Canada working for{" "}
            <a
              className="company-link"
              href="https://www.imperiallegacy.ca/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "teal" }}
            >
              Imperial Legacy Inc.
            </a>
          </p>
        </div>
      </div>

      <div className="app-inner-wrapper">
        <RedirectButtons urls={links} />
        <SummaryContainer />
      </div>
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
    </motion.div>
  );
}
export default HomePage;
