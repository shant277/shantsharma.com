import { motion } from "framer-motion";
import "./redirectButton.css";

const redirectButtonVariants = {
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.9 },
};

function RedirectPage(props) {
  const { redirectButtons } = props;

    const genButtons = () => {
   
    return redirectButtons.map((redirectButton) => (
        
      <div key={redirectButton.title}>
        <motion.button
          className="link-button"
          key={redirectButton.name}
          onClick={() => window.open(redirectButton.url, "_blank")}
          variants={redirectButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {redirectButton.icon}
          {redirectButton.name}
        </motion.button>
      </div>
    ));
    /* return Object.entries(urls).map(([title, url]) => {
          
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
    }); */
  };

  return <div className="link-button-wrapper">{genButtons()}</div>;
}

export default RedirectPage;
