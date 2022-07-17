import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register1 from "./pages/auth/Register1";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterComplete from "./pages/auth/RegisterComplete";

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register1} />
      <Route exact path="/register/complete" component={RegisterComplete} />
    </Switch>
    <Footer />
    </>
    
  );
};

export default App;
