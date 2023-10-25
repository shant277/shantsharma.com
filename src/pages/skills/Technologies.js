import FlipCard from "../../components/flipCard";
import { motion } from "framer-motion";
import "./Technologies.css";

function Technologies(props) {
  const skillVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.5,
      },
    },
    tap: { scale: 0.9 },
  };
  return (
    <div>
      <h4 className="technologies-title">Technologies</h4>
      <div className="technologies-container" id="skills">
        {/* 
       <BulletPoints content={props.skills}></BulletPoints> */}
        {/* Print out contents of string array as list objects*/}
        {props.Technologies.map((technology) => (
          <motion.div
            variants={skillVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <ul>
              <FlipCard name={technology.technology} icon={technology.icon} />
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Technologies;
