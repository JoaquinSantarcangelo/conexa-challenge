import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// -- Styles -- //
import "./styles/index.sass";
import "./styles/globalStyles.sass";

//  Screens Styles //
import "./screens/LoginScreen/index.sass";
import "./screens/HomeScreen/index.sass";

//Screens
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/login" component={LoginScreen}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
