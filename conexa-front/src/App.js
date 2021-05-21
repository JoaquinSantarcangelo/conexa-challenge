import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
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
          <PrivateRoute path="/" exact component={HomeScreen}></PrivateRoute>
          <PublicRoute path="/login" component={LoginScreen}></PublicRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
