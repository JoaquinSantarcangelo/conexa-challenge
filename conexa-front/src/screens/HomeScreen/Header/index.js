import React from "react";
import { motion } from "framer-motion";

//Components
import Navbar from "../../../components/Navbar";

const variants = {
  hidden: { height: 0 },
  visible: { height: "30vh" },
  exit: { height: 0 },
};

const index = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="header"
    >
      <div className="container">
        <Navbar />
      </div>
    </motion.div>
  );
};

export default index;
