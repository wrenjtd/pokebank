import React from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import UserareaComponent from '../ui/userarea.component';



const LoginComponent: React.FC = () => {
    return (
        <React.Fragment>
           
        <div className="login_form">
        <div className="login_credentials">
            <br></br>
        <span>Username: </span>
        <input type = "text" id="username" name="user"></input>
        <br></br>
        <span>Password: </span>
        <input type = "password" id="password" name="password"></input>
        <br></br><br></br>
        <Link to="/userarea"><button className="login_button">Login</button></Link>
       
        <br></br><br></br>
        </div>
        </div>
        <Redirect exact path="/" to="/login"></Redirect>
        <Switch>
        <Route path ="/userarea" component= {UserareaComponent}></Route>
            
            
        </Switch>
        </React.Fragment>

    )
}

export default LoginComponent;