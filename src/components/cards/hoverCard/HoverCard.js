import { useState } from "react";
import ProjectSummary from "../../../pages/projectEducation/projectSummary/ProjectSummary";
import Overlay from "./overlay/Overlay";
import Modal from "./modal/Modal";
import { AnimatePresence } from "framer-motion";

import "./HoverCard.css";

const ProjectCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ProjectSummary data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            {<Modal data={data} close={closeModal} />}
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
