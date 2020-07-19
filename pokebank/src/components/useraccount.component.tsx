import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'



const UseraccountComponent: React.FC = () => {
   

    let pokemonGames: boolean [] = [true, false, true, true, true, false, true, true, true, true, true];
    const [gamesOwned, setGamesOwned] = useState(pokemonGames);    
    let setPokemonNum : number = 1;

    const [blueToggle, setBlueToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/blue_logo.png');
    const [redToggle, setRedToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/red_logo.png');
    const [yellowToggle, setYellowToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/yellow_logo.png');
    const [goldToggle, setGoldToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/gold_logo.png');
    const [silverToggle, setSilverToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/silver_logo.png');
    const [rubyToggle, setRubyToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/ruby_logo.png');
    const [sapphireToggle, setSapphireToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/sapphire_logo.png');
    const [diamondToggle, setDiamondToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/diamond_logo.png');
    const [pearlToggle, setPearlToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/pearl_logo.png');
    const [blackToggle, setBlackToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/black_logo.png');
    const [whiteToggle, setWhiteToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/white_logo.png');


    /** Pokemon */

    const [bulb001Toggle, setBulb001Toggle] = useState(`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pokemon/gen_1/pokemon/${setPokemonNum}.png`);
    

    /** sendGame function triggered on game button press */
    const sendGame = (evt: any) =>{
        //Prevent Default click action from firing
        evt.preventDefault();
        //value holds 'data-value' from game logo clicked
        let value = evt.target.getAttribute('data-value');
        
        // let gameNumberString = evt.target.getAttribute('game-number');
        // let gameNumber = parseInt(gameNumberString);
        if(value == 'blue'){
            if(!pokemonGames[0]){
                setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/blue_logo.png');
                pokemonGames[0] = true;
                console.log("change to true");
            }
            else if(pokemonGames[0]){
                setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/blue_logo_sil.png');
                pokemonGames[0] = false;
                console.log("change to false");
            }
        }

        //A switch statement to determine which game is owned and swap the logo palette
        switch (value) {
            // case 'blue':
            //     if(!pokemonGames[0]){
            //         setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/blue_logo.png');
            //         pokemonGames[0] = true;              
                    
            //     }
            //     else{
            //         setBlueToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/blue_logo_sil.png');
            //         pokemonGames[0] = false; 
                    
            //     }
            //     break;
            case 'red':
                if(!pokemonGames[1]){
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/red_logo.png');
                    pokemonGames[1] = true; 
                }
                else{
                    setRedToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/red_logo_sil.png');
                    pokemonGames[1] = false; 
                }
                break;
            case 'yellow':
                if(!pokemonGames[2]){
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/yellow_logo.png');
                    pokemonGames[2] = true; 
                }
                else{
                    setYellowToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/yellow_logo_sil.png');
                    pokemonGames[2] = false; 
                }
                break;
            case 'gold':
                if(!pokemonGames[3]){
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/gold_logo.png');
                    pokemonGames[3] = true;                 }
                else{
                    setGoldToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/gold_logo_sil.png');
                    pokemonGames[3] = true;                 }
                break;
            case 'silver':
                if(!pokemonGames[4]){
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/silver_logo.png');
                    pokemonGames[4] = true;                 }
                else{
                    setSilverToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/silver_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break;

            case 'ruby':
                if(!pokemonGames[0]){
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/ruby_logo.png');
                    pokemonGames[0] = true;                 }
                else{
                    setRubyToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/ruby_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break; 
            case 'sapphire':
                if(!pokemonGames[0]){
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/sapphire_logo.png');
                    pokemonGames[0] = true;                 }
                else{
                    setSapphireToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/sapphire_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break;
            case 'diamond':
                if(!pokemonGames[0]){
                    setDiamondToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/diamond_logo.png');
                    pokemonGames[0] = true;                 }
                else{
                    setDiamondToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/diamond_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break;   
            case 'pearl':
                if(!pokemonGames[0]){
                    setPearlToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/pearl_logo.png');
                    pokemonGames[0] = true;                 }
                else{
                    setPearlToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/pearl_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break;   
                case 'black':
                if(!pokemonGames[0]){
                    setBlackToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/black_logo.png');
                    pokemonGames[0] = true;                 }
                else{
                    setBlackToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/black_logo_sil.png');
                    pokemonGames[0] = true;                 }
                break;   
                case 'white':
                if(!pokemonGames[0]){
                    setWhiteToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/white_logo.png');
                    pokemonGames[10] = true;                 }
                else{
                    setWhiteToggle('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/white_logo_sil.png');
                    pokemonGames[10] = true;                 }
                break;      
        }
        
    }

    const pokeOwned = (evt: any) =>{
        console.log(gamesOwned[1]);
    }
    return (
        <div >
            <div className = "games_owned">
                <button type= "button" className="game_logo" id="blue"> 
                    <img src= {blueToggle} id="blue_logo" alt="game logo" onClick={sendGame} data-value = "blue" game-number = '0'></img>
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