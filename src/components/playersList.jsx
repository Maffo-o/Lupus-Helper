import { useState } from 'react'
import PlayersListElement from './playersListElement' 
import '../index.css'

function PlayersList({onSet}) {
    
    const [playersList, setPlayers] = useState([]);
    function OnAddElement() {
        const newElement = document.getElementById("new_player");
        if (newElement.value.trim() !== "") {
            const capitalized = newElement.value.charAt(0).toUpperCase() + newElement.value.slice(1);
            const updatedList = [...playersList, capitalized];
            setPlayers(updatedList);
            onSet(updatedList);
        }
        newElement.value = "";
    }
    function OnDeleteElement(index) {
        const updatedList = playersList.filter((_, i) => i !== index);
        setPlayers(updatedList);
        onSet(updatedList);
    }
    function OnInputKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            OnAddElement();
        }
    }

    return <>
        <div>
            <h2>Inserisci i giocatori</h2>
        </div>
        <div>
            <input id="new_player" className="input_field" type="text" placeholder="Nome giocatore" maxLength={10} onKeyPress={OnInputKeyPress}></input>
            <button className="button input_button" onClick={OnAddElement}>
            ➕
            </button>
        </div>
        <div>
            <ol className="full_list list_short">
            {playersList.map((element, index) =>
                <PlayersListElement className="element_text" element={element} index={index} onDelete={OnDeleteElement} key={index}/>
            )}
            </ol>
        </div>
    </>
}

export default PlayersList