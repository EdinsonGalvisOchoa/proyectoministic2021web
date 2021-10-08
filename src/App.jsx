
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ventas from "../src/Pages/Ventas";
import Productos from "../src/Pages/Productos";
import Home from './Pages/Home';
import SobreNosotros from './Pages/SobreNosotros';
import Contactenos from './Pages/Contactenos';
import Usuarios from "./Pages/Usuarios";
import Header from './Components/Header';





function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Ventas'>
          <Header />
          <Ventas />
        </Route>
        <Route path='/Productos'>
          <Header />
          <Productos />
        </Route>
        <Route path='/SobreNosotros'>
          <SobreNosotros />
        </Route>
        <Route path='/Contactenos'>
          <Contactenos />
        </Route>
        <Route path='/Usuarios'>
          <Usuarios />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>






  );
}

export default App;
