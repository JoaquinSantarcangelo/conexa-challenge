import React from "react";
import "./index.sass";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { signOut } from "../../features/user/userSlice";
import { motion } from "framer-motion";

//Icons
import {
  BsCollectionFill,
  BsFillImageFill,
  BsBoxArrowInRight,
} from "react-icons/bs";

const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
  exit: { opacity: 0, y: 10 },
};

const Navbar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="navbar"
    >
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
          onClick={() => handleSignOut()}
        >
          <div className="text">Log out</div>
        </Button>
      </div>
    </motion.div>
  );
};

export default Navbar;
