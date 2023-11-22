import React from "react";
import { motion } from "framer-motion";
import SummaryContainer from "./summaryContainer/SummaryContainer";
import { links, redirectButtons } from "../../constants/Constants";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../constants/Constants.js";
import RedirectPage from "../../components/redirectButton/redirectButton";
import "./AboutMe.css";

function AboutMe() {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="title" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", paddingTop: "5rem" }}>
          {" "}
          Hi, my name is
        </h1>
        <h1 className="name" style={{ fontSize: "2rem" }}>
          Shant Sharma.
        </h1>
        <h1 style={{ paddingBottom: "4rem" }}>
          Your friendly neighbourhood developer.
        </h1>
        <p style={{ textAlign: "center", lineHeight: "1.5" }}>
          I am a recent Computer Science graduate from Macewan University, and
          an (aspiring professional) Software Developer looking to get into the
          industry. I am currently located in Edmonton, Alberta, Canada and am
          currently working for
          <a
            className="company-link"
            href="https://www.imperiallegacy.ca/"
            target="_blank"
            rel="noreferrer"
          >
            Imperial Legacy Inc.
          </a>
        </p>
      </div>
      <div className="inner-container">
              <RedirectPage redirectButtons={redirectButtons} />
      </div>
      <SummaryContainer />
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

export default AboutMe;
