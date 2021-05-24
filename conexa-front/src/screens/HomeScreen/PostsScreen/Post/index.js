import React from "react";
import "./index.sass";
import { Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { variantsTwo } from "../../../../consts/variants";

const index = ({ data, i }) => {
  return (
    <motion.div
      variants={variantsTwo}
      custom={i}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="post"
    >
      <div className="title">{data.title}</div>
      <div className="body">{data.body}</div>
      <Divider />
      <div className="bottom-info">
        <div className="author">
          Created by <span>Lorem Ipsum</span>
        </div>
        <div className="info-divider"></div>
        <div className="tags">
          <div className="text">Tags:</div>
          <div className="tag">Lorem</div>
          <div className="tag">Ipsum</div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
