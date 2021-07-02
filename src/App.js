import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
