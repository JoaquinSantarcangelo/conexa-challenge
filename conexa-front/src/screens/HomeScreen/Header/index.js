import React from "react";
import "./index.sass"
import { motion } from "framer-motion";
import { variantsHeader } from "../../../consts/variants";

//Components
import Navbar from "../../../components/Navbar";

const index = () => {
  return (
    <motion.div
      variants={variantsHeader}
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
