import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Grafica from './pages/Grafica';
import Tesi from './pages/Tesi';
import Student from './pages/Student';
import Illustrazione from './pages/Illustrazione';
import Vantea from './pages/Vantea';

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coding" component={Coding} />
        <Route path="/grafica" component={Grafica} />
        <Route path="/tesi" component={Tesi} />
        <Route path="/illustrazione" component={Illustrazione} />
        <Route path="/student" component={Student} />
        <Route path="/vantea" component={Vantea} />
      </Switch>
    </Router>
  </div>
);

export default App;
