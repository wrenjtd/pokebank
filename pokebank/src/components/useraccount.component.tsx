import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'



const UseraccountComponent: React.FC = () => {
   

    let pokemonGames: boolean [] = [true, true, true, true, true, true, true, true, true, true, true, true];
    const [gamesOwned, setGamesOwned] = useState(pokemonGames);    
    let setPokemonNum: number = 1;
    const [gameToggle, setGameToggle] = useState("https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/1_logo.png");
    const [blueToggle, setBlueToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/1_logo.png');
    const [redToggle, setRedToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/2_logo.png');
    const [yellowToggle, setYellowToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/3_logo.png');
    const [goldToggle, setGoldToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/gold_logo.png');
    const [silverToggle, setSilverToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/silver_logo.png');
    const [rubyToggle, setRubyToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/ruby_logo.png');
    const [sapphireToggle, setSapphireToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/sapphire_logo.png');
    const [diamondToggle, setDiamondToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/diamond_logo.png');
    const [pearlToggle, setPearlToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/pearl_logo.png');
    const [blackToggle, setBlackToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/black_logo.png');
    const [whiteToggle, setWhiteToggle] = useState('https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/white_logo.png');


    /** Pokemon */

    const [pokemon1, setPokemon1] = useState(`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pokemon/gen_1/pokemon/${setPokemonNum}.png`);
    

    /** sendGame function triggered on game button press */
    const sendGame = (evt: any) =>{
        //Prevent Default click action from firing
        evt.preventDefault();
        //value holds 'data-value' from game logo clicked
        let value = evt.target.getAttribute('data-value');
        
        let gameNumberString = evt.target.getAttribute('game-number');
        let gameNumber = parseInt(gameNumberString);
        
            if(!pokemonGames[gameNumber]){
                console.log(pokemonGames[gameNumber]);
               setGameToggle(`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/${gameNumber}_logo.png`);
                pokemonGames[gameNumber] = true;
            }
            else if(pokemonGames[gameNumber]){
                console.log(pokemonGames[gameNumber]);
                setGameToggle(`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/${gameNumber}_logo_sil.png`);
                pokemonGames[gameNumber] = false;
            }
        
    }

    const pokeOwned = (evt: any) =>{
        console.log(gamesOwned[1]);
    }
    return (
        <div>
            <div className = "games_owned">
                <button type= "button" className="game_logo" id="blue"> 
                    <img src= {gameToggle} id="blue_logo" alt="game logo" onClick={sendGame} data-value = "blue" game-number = '1'></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="red"> 
                    <img src= {redToggle} id="red_logo" alt="game logo" onClick={sendGame} data-value = "red" game-number = '2'></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="yellow"> 
                    <img src= {yellowToggle} id="yellow_logo" alt="game logo" onClick={sendGame} data-value = "yellow" game-number = '3'></img>
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
                    <td className = "table_pokemon_image"><img src = {pokemon1} onClick={pokeOwned}></img></td>
                    <td className = "table_pokemon_name">Bulbasaur</td>
                    <td className = "table_pokemon_logo">&#123;Game Logos&#125;</td>
                    </tr>
                </tbody>

                
            </Table>
   
        </div>

            
        
    )
}

export default UseraccountComponent;