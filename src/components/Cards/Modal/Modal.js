import React from "react";
import { motion } from "framer-motion";
import {
  IoCloseCircleOutline,
} from "react-icons/io5";

import "./Modal.css";

const Modal = ({ data, close }) => {
  const { project, description, iconsData } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  const modalIconParentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const modalIconVariants = {
    hidden: { x: -50, opacity: 0 }, // Start position above the viewport
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }, // Final position
  };
  return (
    <motion.div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <h1>{project}</h1>
        <motion.button
          className="modal__close-wrapper"
          onClick={close}
          whileHover={{ scale: 1.2 }}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <motion.div className="modal__description">{description}</motion.div>
        </motion.div>
        <motion.div>
          Technologies used:
          <motion.div
            initial="hidden"
            animate="visible"
            variants={modalIconParentVariants}
            className="project-logo__parent"
          >
            {iconsData.map((data, index) => (
              <motion.div key={index} className="project-logo__container">
                <motion.div variants={modalIconVariants}>
                  {data.icon}
                </motion.div>
                <motion.div variants={modalIconVariants}>
                  <p className="project-logo__name"> {data.name} </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
