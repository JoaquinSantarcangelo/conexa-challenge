import React from "react";
import "./index.sass";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  BsCollectionFill,
  BsFillImageFill,
  BsBoxArrowInRight,
} from "react-icons/bs";

const index = () => {
  return (
    <div className="navbar">
      <div className="wrapper-left">
        <NavLink to="/">
          <Button
            mr="0.5em"
            leftIcon={<BsCollectionFill />}
            size="lg"
            color="gray.900"
          >
            Posts
          </Button>
        </NavLink>
        <NavLink to="/photos">
          <Button color="gray.900" leftIcon={<BsFillImageFill />} size="lg">
            Photos
          </Button>
        </NavLink>
      </div>
      <div className="wrapper-right">
        <Button
          rightIcon={<BsBoxArrowInRight />}
          id="log-out"
          variant="outline"
          size="lg"
        >
          <div className="text">Log out</div>
        </Button>
      </div>
    </div>
  );
};

export default index;
