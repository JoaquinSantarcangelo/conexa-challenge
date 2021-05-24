import React from "react";
import "./index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { variantsTransition } from "../../consts/variants";
import { motion } from "framer-motion";
//Screens
import PhotosScreen from "./PhotosScreen";
import PostsScreen from "./PostsScreen";

//Components
import Header from "./Header";

//Routes
import PrivateRoute from "../../routes/PrivateRoute";

const HomeScreen = () => {
  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
      id="home-screen"
    >
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <PrivateRoute
              authenticated={true}
              path="/"
              exact
              component={PostsScreen}
            ></PrivateRoute>
            <PrivateRoute
              path="/photos"
              authenticated={true}
              component={PhotosScreen}
            ></PrivateRoute>
          </Switch>
        </div>
      </Router>
    </motion.div>
  );
};

export default HomeScreen;
