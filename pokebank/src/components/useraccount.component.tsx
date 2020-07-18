import React, { useState } from 'react';
import yellow from '../components/images/logo3.png'
import blue from '../components/images/blue.png'
import blueSil from '../components/images/blue_sil.png'
import red from '../components/images/charizard.png'
import gold from '../components/images/Gold2.png'
import silver from '../components/images/Silver2.png'
import ruby from '../components/images/ruby2.png'
import sapphire from '../components/images/sapphire2.png'
import bulba from '../components/images/bulb2.png'

import Table from 'react-bootstrap/Table'



const UseraccountComponent: React.FC = () => {
   
    /** Bool state for each game owned */
    const [blueOwned, setBlueOwned] = useState(true);
    const [redOwned, setRedOwned] = useState(true);
    const [yellowOwned, setYellowOwned] = useState(true);
    const [goldOwned, setGoldOwned] = useState(true);
    const [silverOwned, setSilverOwned] = useState(true);
    const [rubyOwned, setRubyOwned] = useState(true);
    const [sapphireOwned, setSapphireOwned] = useState(true);

    const [blueToggle, setBlueToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue.png');

    /** sendGame function triggered on game button press */
    const sendGame = (evt: any) =>{
        //Prevent Default click action from firing
        evt.preventDefault();
        //value holds 'data-value" from game logo clicked
        let value = evt.target.getAttribute('data-value');

        //A switch statement to determine which game is owned and swap the logo palette
        switch (value) {
            case 'blue':
                if(!blueOwned){
                    setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue.png');
                    setBlueOwned(true);
                    console.log("Blue Owned");
                   
                    
                    
                }
                else{
                    setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue_sil.png');
                    setBlueOwned(false);
                    console.log("Blue Not Owned");
                    
                }
                break;
            case 'red':
                if(!redOwned){
                    console.log("I do own red");
                    setRedOwned(true);
                    console.log("Value of rOwned = " + redOwned);
                }
                else{
                    console.log("I do not own red");
                    setRedOwned(false);
                    console.log("Value of rOwned = " + redOwned);
                }
                break;
            case 'yellow':
                if(!yellowOwned){
                    console.log("I do own yellow");
                    setYellowOwned(true);
                    console.log("Value of yOwned = " + yellowOwned);
                }
                else{
                    console.log("I do not own yellow");
                    setYellowOwned(false);
                    console.log("Value of yOwned = " + yellowOwned);
                }
                break;
            case 'gold':
                if(!goldOwned){
                    console.log("I do own gold");
                    setGoldOwned(true);
                    console.log("Value of gOwned = " + goldOwned);
                }
                else{
                    console.log("I do not own gold");
                    setGoldOwned(false);
                    console.log("Value of gOwned = " + goldOwned);
                }
                break;
            case 'silver':
                if(!silverOwned){
                    console.log("I do own silver");
                    setSilverOwned(true);
                    console.log("Value of sOwned = " + silverOwned);
                }
                else{
                    console.log("I do not own silver");
                    setSilverOwned(false);
                    console.log("Value of sOwned = " + silverOwned);
                }
                break;

            case 'ruby':
                if(!rubyOwned){
                    console.log("I do own ruby");
                    setRubyOwned(true);
                    console.log("Value of rOwned = " + rubyOwned);
                }
                else{
                    console.log("I do not own ruby");
                    setRubyOwned(false);
                    console.log("Value of rOwned = " + rubyOwned);
                }
                break; 
            case 'sapphire':
                if(!sapphireOwned){
                    console.log("I do own sapphire");
                    setSapphireOwned(true);
                    console.log("Value of yOwned = " + sapphireOwned);
                }
                else{
                    console.log("I do not own sapphire");
                    setSapphireOwned(false);
                    console.log("Value of yOwned = " + sapphireOwned);
                }
                break;   
        }
        
    }

    const pokeOwned = (evt: any) =>{
        console.log("Bulbasaur")
    }
    return (
        <div >
            <div className = "games_owned">
                <button type= "button" className="game_logo" id="blue"> 
                    <img src= {blueToggle} id="blue_logo" alt="game logo" onClick={sendGame} data-value = "blue"></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="red"> 
                    <img src= {red} id="red_logo" alt="game logo" onClick={sendGame} data-value = "red"></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="yellow"> 
                    <img src= {yellow} id="yellow_logo" alt="game logo" onClick={sendGame} data-value = "yellow"></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="gold"> 
                    <img src= {gold} id="gold_logo" alt="game logo" onClick={sendGame} data-value = "gold"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="silver"> 
                    <img src= {silver} id="silver_logo" alt="game logo" onClick={sendGame} data-value = "silver"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="ruby"> 
                    <img src= {ruby} id="ruby_logo" alt="game logo" onClick={sendGame} data-value = "ruby"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="sapphire"> 
                    <img src= {sapphire} id="sapphire_logo" alt="game logo" onClick={sendGame} data-value = "sapphire"></img> 
                </button> &nbsp;
            </div>


            <Table striped hover responsive="sm" >
            
                <tbody>
                    <tr className="table-warning">
                    <td className = "table_pokemon_id">1</td>
                    <td className = "table_pokemon_image"><img src = {bulba} onClick={pokeOwned}></img></td>
                    <td className = "table_pokemon_name">Bulbasaur</td>
                    <td className = "table_pokemon_logo">&#123;Game Logos&#125;</td>
                    </tr>
                </tbody>

                
            </Table>
   
        </div>

            
        
    )
}

export default UseraccountComponent;