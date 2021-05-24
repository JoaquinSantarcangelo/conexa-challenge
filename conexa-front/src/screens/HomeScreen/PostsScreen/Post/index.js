import React from "react";
import "./index.sass";

const index = ({ data }) => {
  return (
    <div className="post">
      <div className="title">{data.title}</div>
    </div>
  );
};

export default index;
