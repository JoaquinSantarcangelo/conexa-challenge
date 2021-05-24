import React from "react";
import "./index.sass";

const index = ({ photo }) => {
  return (
    <div className="modal" id="photo-modal">
      <div className="card">
        <div style={{backgroundImage: `url(${photo.url})`}} className="image"></div>
        {/* <div className="bottom-info">
          <div className="title"></div>
        </div> */}
      </div>
    </div>
  );
};

export default index;
