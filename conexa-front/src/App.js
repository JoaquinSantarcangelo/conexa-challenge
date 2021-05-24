import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
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
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch>
                {/* Home Screen */}
                <PrivateRoute exact path="/" authenticated={user.loggedIn}>
                  <HomeScreen />
                </PrivateRoute>
                {/* Login Screen */}
                <PublicRoute path="/" authenticated={user.loggedIn}>
                  <LoginScreen />
                </PublicRoute>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
