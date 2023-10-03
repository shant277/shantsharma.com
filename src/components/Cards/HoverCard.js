import { useState } from "react";
import ProjectSummary from "../../pages/ProjectEducation/projects/ProjectSummary";
import Overlay from "./Overlay/Overlay";
import Modal from "./Modal/Modal";
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
      {/* Logic for rendering expanded view */}
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
