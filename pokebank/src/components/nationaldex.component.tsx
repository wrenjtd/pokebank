import React from 'react';
import HeaderComponent from '../components/header.component';
import { Switch, Route, Redirect } from 'react-router';
import Axios from 'axios';


const NationaldexComponent: React.FC = () => {
    
    Axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((repsonse) =>{
        console.log(repsonse.data);
    })

    async function getData(){
        let charmanderInfo = await Axios.get('https://pokeapi.co/api/v2/pokemon/charmander');
        console.log(charmanderInfo.data);
    }
    
    
    return (
        <div className = "dex_title">
            <h2>National Dex</h2>
        <p>{`${getData()}`}</p>
        </div>
    )
}

export default NationaldexComponent;