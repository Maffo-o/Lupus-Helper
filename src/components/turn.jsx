import { useState } from 'react'
import translations from './translations'
import '../index.css'

function Turn({turnOrder, language}) {
    const currentTranslations = translations[language];

    const [turnIndex, setIndex] = useState(0);
    function NextTurn() {
        let temp = turnIndex;
        temp++;
        if (temp > turnOrder.length -1)
            temp = 0;
        setIndex(temp);
    }

    const currentTurn = turnOrder[turnIndex].translations?.[language] ?? turnOrder[turnIndex];

    return <div className="turn_section">
        <div className="turn_header">
            <h2>{currentTranslations.currentTurnHeading}</h2>
            <button className="button" onClick={NextTurn} aria-label={currentTranslations.nextTurnButton}>➡️</button>
        </div>
        <h3>{currentTurn.name}</h3>   
        <p className="power_text">{currentTurn.power}</p>
    </div>
}

export default Turn