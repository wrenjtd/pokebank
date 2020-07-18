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
    const [redToggle, setRedToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/charizard.png');
    const [yellowToggle, setYellowToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/logo3.png');
    const [goldToggle, setGoldToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/Gold2.png');
    const [silverToggle, setSilverToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/Silver2.png');
    const [rubyToggle, setRubyToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby2.png');
    const [sapphireToggle, setSapphireToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire2.png');

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
                    
                }
                else{
                    setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue_sil.png');
                    setBlueOwned(false);
                    
                }
                break;
            case 'red':
                if(!redOwned){
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/charizard.png');
                    setRedOwned(true);
                }
                else{
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/red_sil.png');
                    setRedOwned(false);
                }
                break;
            case 'yellow':
                if(!yellowOwned){
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/logo3.png');
                    setYellowOwned(true);
                }
                else{
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/yellow_sil.png');
                    setYellowOwned(false);
                }
                break;
            case 'gold':
                if(!goldOwned){
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/Gold2.png');
                    setGoldOwned(true);
                }
                else{
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/gold2_sil.png');
                    setGoldOwned(false);
                }
                break;
            case 'silver':
                if(!silverOwned){
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/Silver2.png');
                    setSilverOwned(true);
                }
                else{
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/silver2_sil.png');
                    setSilverOwned(false);
                }
                break;

            case 'ruby':
                if(!rubyOwned){
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby2.png');
                    setRubyOwned(true);
                }
                else{
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby2_sil.png');
                    setRubyOwned(false);
                }
                break; 
            case 'sapphire':
                if(!sapphireOwned){
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire2.png');
                    setSapphireOwned(true);
                }
                else{
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire2_sil.png');
                    setSapphireOwned(false);
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
                    <img src= {redToggle} id="red_logo" alt="game logo" onClick={sendGame} data-value = "red"></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="yellow"> 
                    <img src= {yellowToggle} id="yellow_logo" alt="game logo" onClick={sendGame} data-value = "yellow"></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="gold"> 
                    <img src= {goldToggle} id="gold_logo" alt="game logo" onClick={sendGame} data-value = "gold"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="silver"> 
                    <img src= {silverToggle} id="silver_logo" alt="game logo" onClick={sendGame} data-value = "silver"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="ruby"> 
                    <img src= {rubyToggle} id="ruby_logo" alt="game logo" onClick={sendGame} data-value = "ruby"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="sapphire"> 
                    <img src= {sapphireToggle} id="sapphire_logo" alt="game logo" onClick={sendGame} data-value = "sapphire"></img> 
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