import React from "react";
import "./index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import PhotosScreen from "./PhotosScreen";
import PostsScreen from "./PostsScreen";

//Components
import Navbar from "../../components/Navbar";

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
            <Route path="/" exact component={PostsScreen}></Route>
            <Route path="/photos" component={PhotosScreen}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default HomeScreen;
