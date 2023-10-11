import Github from "../../icons/github";
import LinkedIn from "../../icons/github";
import Email from "../../icons/github";
import { motion } from "framer-motion";

import "./redirectButton.css";
const Icons = { Github, LinkedIn, Email };

const redirectButtonVariants = {
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.9 },
};

function RedirectPage(props) {
  const { urls } = props;
  const genButtons = () => {
    return Object.entries(urls).map(([title, url]) => {
      const IconComponent = Icons[title];
      return (
        <div key={title}>
          <motion.button
            className="link-button"
            key={title}
            onClick={() => window.open(url, "_blank")}
            variants={redirectButtonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {IconComponent && <IconComponent className="link-icon" />}
            {title}
          </motion.button>
        </div>
      );
    });
  };

  return <div className="link-button-wrapper">{genButtons()}</div>;
}

export default RedirectPage;
