import React from "react";
import "./index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import PhotosScreen from "./PhotosScreen";
import PostsScreen from "./PostsScreen";

//Components
import Navbar from "../../components/Navbar";

//Routes
import PrivateRoute from "../../routes/PrivateRoute";

const HomeScreen = () => {
  return (
    <div id="home-screen">
      <Router>
        <div className="header">
          <div className="container">
            <Navbar />
          </div>
        </div>
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
    </div>
  );
};

export default HomeScreen;
