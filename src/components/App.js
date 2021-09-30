import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './Menu';
import Usuarios from './Usuarios';

const Tareas = ()=><div>Tareas</div>


const App = ()=>(
  <BrowserRouter>
    <Menu/>
    <Route exact path= '/' component={Usuarios}></Route>
    <Route exact path= '/tareas' component={Tareas}></Route>
  </BrowserRouter>

);

export default App;
//cambios