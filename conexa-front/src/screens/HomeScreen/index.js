import React from "react";
import "./index.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import PhotosScreen from "./PhotosScreen";
import PostsScreen from "./PostsScreen";

const HomeScreen = () => {
  return (
    <div>
      HomeScreen
      <Router>
        <Switch>
          <Route path="/posts" exact component={PostsScreen}></Route>
          <Route path="/photos" component={PhotosScreen}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default HomeScreen;
