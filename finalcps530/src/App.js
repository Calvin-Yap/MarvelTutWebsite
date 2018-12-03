import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/default.css';

import Summary from "./components/Summary";
import Install from "./components/Install";
import Tutorial from "./components/Tutorial";
import GoodPage from "./components/GoodPage";
import Conclusion from "./components/Conclusion";
import Credits from "./components/Credits";
import Error from "./components/Error";
import Navigation from "./components/Navigation"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Summary} exact />
          <Route path="/install" component={Install}/>
          <Route path="/tutorial" component={Tutorial}/>
          <Route path="/goodPage" component={GoodPage}/>
          <Route path="/conclusion" component={Conclusion}/>
          <Route path="/credits" component={Credits}/>
          <Route component={Error}/>
        </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
