import React from "react";
import Pic from "../../../pictures/pineapple.png";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

import "./Modal.css";

const Modal = ({ data, close }) => {
  const { title, description, imageUrl } = data;

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
  return (
    <motion.div
      className="modal"
      onClick={(e) => e.stopPropagation()}
      variants={modalVariants}
    >
      {/*       <img className="modal__image" alt="project" src={Pic} />
       */}{" "}
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <h1>{title}</h1>
        <button className="modal__close-wrapper" onClick={close}>
          <IoCloseCircleOutline className="modal__close-icon" />
        </button>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <motion.div className="modal__description">{description}</motion.div>
        </motion.div>
        <motion.div>
          languages, framworks, things of note will be in icon form here:
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
