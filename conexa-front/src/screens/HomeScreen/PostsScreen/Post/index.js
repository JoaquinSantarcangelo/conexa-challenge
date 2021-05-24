import React from "react";
import { Divider } from "@chakra-ui/react";
import "./index.sass";

const index = ({ data }) => {
  return (
    <div className="post">
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
    </div>
  );
};

export default index;
