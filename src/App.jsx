
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "../src/Pages/Productos";
import Home from './Pages/Home';
import SobreNosotros from './Pages/SobreNosotros';
import Contactenos from './Pages/Contactenos';
import Usuarios from "./Pages/Usuarios";
import Header from './Components/Header';
import Ventas from './Pages/Ventas';




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
          <Header />
          <Usuarios/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>






  );
}

export default App;
