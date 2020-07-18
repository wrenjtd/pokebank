import React from 'react';
import './App.css';
import LoginComponent from './components/login.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserareaComponent from './ui/userarea.component';

function App() {
  return (
    
    <div className = "userarea_container">
      <BrowserRouter>

      
     {/* <LoginComponent></LoginComponent> */}
     <UserareaComponent></UserareaComponent>
  <Switch>
      <Route path ="/login" component= {LoginComponent}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
