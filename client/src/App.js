import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainContainer from "./containers/MainContainer";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const loginSubmit = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/");
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login loginSubmit={loginSubmit} />
        </Route>
        <Route path="/register">
          <Register registerSubmit={registerSubmit} />
        </Route>
        <Route path="/">
          <MainContainer currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
