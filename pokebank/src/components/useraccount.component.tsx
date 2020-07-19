import React, { useState } from 'react';
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
    const [diamondOwned, setDiamondOwned] = useState(true);
    const [pearlOwned, setPearlOwned] = useState(true);
    const [blackOwned, setBlackOwned] = useState(true);
    const [whiteOwned, setWhiteOwned] = useState(true);

    const [blueToggle, setBlueToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue_logo.png');
    const [redToggle, setRedToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/red_logo.png');
    const [yellowToggle, setYellowToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/yellow_logo.png');
    const [goldToggle, setGoldToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/gold_logo.png');
    const [silverToggle, setSilverToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/silver_logo.png');
    const [rubyToggle, setRubyToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby_logo.png');
    const [sapphireToggle, setSapphireToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire_logo.png');
    const [diamondToggle, setDiamondToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/diamond_logo.png');
    const [pearlToggle, setPearlToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pearl_logo.png');
    const [blackToggle, setBlackToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/black_logo.png');
    const [whiteToggle, setWhiteToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/white_logo.png');


    /** Pokemon */

    const [bulb001, setBulb001] = useState(true);
    const [bulb001Toggle, setBulb001Toggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pokemon/gen_1/pokemon/001.png');
    

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
                    setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue_logo.png');
                    setBlueOwned(true);              
                    
                }
                else{
                    setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/blue_logo_sil.png');
                    setBlueOwned(false);
                    
                }
                break;
            case 'red':
                if(!redOwned){
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/red_logo.png');
                    setRedOwned(true);
                }
                else{
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/red_logo_sil.png');
                    setRedOwned(false);
                }
                break;
            case 'yellow':
                if(!yellowOwned){
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/yellow_logo.png');
                    setYellowOwned(true);
                }
                else{
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/yellow_logo_sil.png');
                    setYellowOwned(false);
                }
                break;
            case 'gold':
                if(!goldOwned){
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/gold_logo.png');
                    setGoldOwned(true);
                }
                else{
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/gold_logo_sil.png');
                    setGoldOwned(false);
                }
                break;
            case 'silver':
                if(!silverOwned){
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/silver_logo.png');
                    setSilverOwned(true);
                }
                else{
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/silver_logo_sil.png');
                    setSilverOwned(false);
                }
                break;

            case 'ruby':
                if(!rubyOwned){
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby_logo.png');
                    setRubyOwned(true);
                }
                else{
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/ruby_logo_sil.png');
                    setRubyOwned(false);
                }
                break; 
            case 'sapphire':
                if(!sapphireOwned){
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire_logo.png');
                    setSapphireOwned(true);
                }
                else{
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/sapphire_logo_sil.png');
                    setSapphireOwned(false);
                }
                break;
            case 'diamond':
                if(!diamondOwned){
                    setDiamondToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/diamond_logo.png');
                    setDiamondOwned(true);
                }
                else{
                    setDiamondToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/diamond_logo_sil.png');
                    setDiamondOwned(false);
                }
                break;   
            case 'pearl':
                if(!pearlOwned){
                    setPearlToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pearl_logo.png');
                    setPearlOwned(true);
                }
                else{
                    setPearlToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pearl_logo_sil.png');
                    setPearlOwned(false);
                }
                break;   
                case 'black':
                if(!blackOwned){
                    setBlackToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/black_logo.png');
                    setBlackOwned(true);
                }
                else{
                    setBlackToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/black_logo_sil.png');
                    setBlackOwned(false);
                }
                break;   
                case 'white':
                if(!whiteOwned){
                    setWhiteToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/white_logo.png');
                    setWhiteOwned(true);
                }
                else{
                    setWhiteToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/white_logo_sil.png');
                    setWhiteOwned(false);
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
                <button type= "button" className="game_logo" id="diamond"> 
                    <img src= {diamondToggle} id="diamond_logo" alt="game logo" onClick={sendGame} data-value = "diamond"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="pearl"> 
                    <img src= {pearlToggle} id="pearl_logo" alt="game logo" onClick={sendGame} data-value = "pearl"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="black"> 
                    <img src= {blackToggle} id="black_logo" alt="game logo" onClick={sendGame} data-value = "black"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="white"> 
                    <img src= {whiteToggle} id="white_logo" alt="game logo" onClick={sendGame} data-value = "white"></img> 
                </button> &nbsp;
            </div>


            <Table striped hover responsive="sm" >
            
                <tbody>
                    <tr className="table-warning">
                    <td className = "table_pokemon_id">1</td>
                    <td className = "table_pokemon_image"><img src = {bulb001Toggle} onClick={pokeOwned}></img></td>
                    <td className = "table_pokemon_name">Bulbasaur</td>
                    <td className = "table_pokemon_logo">&#123;Game Logos&#125;</td>
                    </tr>
                </tbody>

                
            </Table>
   
        </div>

            
        
    )
}

export default UseraccountComponent;