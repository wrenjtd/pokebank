import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'



const UseraccountComponent: React.FC = () => {
   

    let pokemonGames: boolean [] = [true, false, false, true, true, true, true, true, true, true, true, true];
    
    const [gamesOwned, setGamesOwned] = useState(pokemonGames);    
    let setPokemonNum: number = 1;
    const [gameToggle, setGameToggle] = useState("https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/1_logo.png");


    /** Pokemon */

    const [pokemon1, setPokemon1] = useState(`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/pokemon/gen_1/pokemon/${setPokemonNum}.png`);
    

    const gamesToggle = (game: string) =>{
        
        let intGame = parseInt(game);
        let testGames: string = (`https://raw.githubusercontent.com/wrenjtd/pokebank/master/pokebank/src/components/images/game_logos/${intGame}_logo.png`);
        
        
        
        
        return testGames;

    }


    

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
               gamesToggle(gameNumberString);
                pokemonGames[gameNumber] = true;
            }
            else if(pokemonGames[gameNumber]){
                console.log(pokemonGames[gameNumber]);
                gamesToggle("2");
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
                    <img src= {gamesToggle('1')} id="blue_logo" alt="game logo" onClick={sendGame} data-value = "blue" game-number = '1'></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="red"> 
                    <img src= {gamesToggle('2')} id="red_logo" alt="game logo" onClick={sendGame} data-value = "red" game-number = '2'></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="yellow"> 
                    <img src= {gamesToggle('3')} id="yellow_logo" alt="game logo" onClick={sendGame} data-value = "yellow" game-number = '3'></img>
                </button> &nbsp;
                <button type= "button" className="game_logo" id="gold"> 
                    <img src= {gamesToggle('4')} id="gold_logo" alt="game logo" onClick={sendGame} data-value = "gold"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="silver"> 
                    <img src= {gamesToggle('5')} id="silver_logo" alt="game logo" onClick={sendGame} data-value = "silver"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="ruby"> 
                    <img src= {gamesToggle('6')} id="ruby_logo" alt="game logo" onClick={sendGame} data-value = "ruby"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="sapphire"> 
                    <img src= {gamesToggle('7')} id="sapphire_logo" alt="game logo" onClick={sendGame} data-value = "sapphire"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="diamond"> 
                    <img src= {gamesToggle('8')} id="diamond_logo" alt="game logo" onClick={sendGame} data-value = "diamond"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="pearl"> 
                    <img src= {gamesToggle('9')} id="pearl_logo" alt="game logo" onClick={sendGame} data-value = "pearl"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="black"> 
                    <img src= {gamesToggle('10')} id="black_logo" alt="game logo" onClick={sendGame} data-value = "black"></img> 
                </button> &nbsp;
                <button type= "button" className="game_logo" id="white"> 
                    <img src= {gamesToggle('11')} id="white_logo" alt="game logo" onClick={sendGame} data-value = "white"></img> 
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