import React from "react";
import "./index.sass";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="navbar">
      <div className="wrapper-left">
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/photos">Photos</NavLink>
      </div>
      <div className="wrapper-right">
          <div id="logout">Logout</div>
      </div>
    </div>
  );
};

export default index;
