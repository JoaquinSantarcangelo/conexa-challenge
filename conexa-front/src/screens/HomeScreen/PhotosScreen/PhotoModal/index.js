import React from "react";
import "./index.sass";
import ClickAwayListener from "react-click-away-listener";

const index = ({ photo, photoModal, setPhotoModal }) => {
  const handleClickAway = () => {
    setPhotoModal({ ...photoModal, state: false });
  };

  return (
    <div className="modal" id="photo-modal">
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="card">
          <div
            style={{ backgroundImage: `url(${photo.url})` }}
            className="image"
          ></div>
          {/* <div className="bottom-info">
          <div className="title"></div>
        </div> */}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default index;
