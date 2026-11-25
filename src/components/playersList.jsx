import { useState, useEffect } from 'react'
import PlayersListElement from './playersListElement' 
import translations from './translations'
import '../index.css'

function PlayersList({onSet, language}) {
    const currentTranslations = translations[language];
    
    const [playersList, setPlayers] = useState(() => {
        const savedPlayers = JSON.parse(localStorage.getItem('lupus-helper.players') || '[]');
        return Array.isArray(savedPlayers) ? savedPlayers : [];
    });
    useEffect(() => {
        localStorage.setItem('lupus-helper.players', JSON.stringify(playersList));
        onSet(playersList);
    }, [playersList, onSet]);

    function OnAddElement() {
        const newElement = document.getElementById("new_player");
        if (newElement.value.trim() !== "") {
            const capitalized = newElement.value.charAt(0).toUpperCase() + newElement.value.slice(1);
            const updatedList = [...playersList, capitalized];
            setPlayers(updatedList);
        }
        newElement.value = "";
    }
    function OnDeleteElement(index) {
        const updatedList = playersList.filter((_, i) => i !== index);
        setPlayers(updatedList);
    }
    function OnInputKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            OnAddElement();
        }
    }

    return <>
        <div>
            <h2>{currentTranslations.playersHeading}</h2>
        </div>
        <div className="player_input">
            <input id="new_player" className="input_field" type="text" placeholder={currentTranslations.playerNamePlaceholder} maxLength={10} onKeyPress={OnInputKeyPress}></input>
            <button className="button input_button" onClick={OnAddElement} aria-label={currentTranslations.addPlayerButton}>
            ➕
            </button>
        </div>
        <div>
            <ol className="full_list list_short">
            {playersList.map((element, index) =>
                <PlayersListElement className="element_text" element={element} index={index} onDelete={OnDeleteElement} language={language} key={index}/>
            )}
            </ol>
        </div>
    </>
}

export default PlayersList