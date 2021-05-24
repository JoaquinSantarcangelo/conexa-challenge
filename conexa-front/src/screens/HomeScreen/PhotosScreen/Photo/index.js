import React from "react";
import { motion } from "framer-motion";
import { variantsTwo } from "../../../../consts/variants";

import "./index.sass";

const index = ({ data, i }) => {
  return (
    <motion.div
      variants={variantsTwo}
      custom={i}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="photo"
    >
      <div
        style={{ backgroundImage: `url(${data.thumbnailUrl})` }}
        className="thumbnail"
      ></div>
      <div className="content">
        <div className="title">{data.title}</div>
      </div>
    </motion.div>
  );
};

export default index;
