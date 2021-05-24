import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

//Routes
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
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home Screen */}
          <PrivateRoute path="/" exact authenticated={user.user}>
            <HomeScreen />
          </PrivateRoute>
          {/* Login Screen */}
          <PublicRoute path="/login" authenticated={user.user}>
            <LoginScreen />
          </PublicRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
