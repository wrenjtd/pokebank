import React from 'react';
import HeaderComponent from '../components/header.component';
import { Switch, Route, Redirect } from 'react-router';
import NationaldexComponent from '../components/nationaldex.component';
import RegionaldexComponent from '../components/regionaldex.component';
import LoginComponent from '../components/login.component';
import UseraccountComponent from '../components/useraccount.component';


const UserareaComponent: React.FC = () => {
    return (
        <div >
            <HeaderComponent></HeaderComponent>
            <Switch>
            
            <Route path ="/ndex" component= {NationaldexComponent}></Route>
            <Route path ="/rdex" component= {RegionaldexComponent}></Route>
            <Route path ="/myaccount" component= {UseraccountComponent}></Route>


        </Switch>
            
        </div>
    )
}

export default UserareaComponent;