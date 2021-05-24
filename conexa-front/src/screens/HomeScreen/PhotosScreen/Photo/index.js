import React from "react";
import "./index.sass";

const index = ({ data }) => {
  return (
    <div className="photo">
      <div
        style={{ backgroundImage: `url(${data.thumbnailUrl})` }}
        className="thumbnail"
      ></div>
      <div className="content">
        <div className="title">{data.title}</div>
      </div>
    </div>
  );
};

export default index;
