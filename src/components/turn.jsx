import { useState } from 'react'
import '../index.css'

function Turn({turnOrder}) {

    const [turnIndex, setIndex] = useState(0);
    function NextTurn() {
        let temp = turnIndex;
        temp++;
        if (temp > turnOrder.length -1)
            temp = 0;
        setIndex(temp);
    }

    return <div className="turn_section">
        <div className="turn_header">
            <h2>Turno corrente</h2>
            <button className="button" onClick={NextTurn} aria-label="Prossimo turno">➡️</button>
        </div>
        <h3>{turnOrder[turnIndex].name}</h3>   
        <p className="power_text">{turnOrder[turnIndex].power}</p>
    </div>
}

export default Turn