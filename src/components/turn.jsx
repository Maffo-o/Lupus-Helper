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

    return <div>
        <h2>Turno corrente</h2>
        <h3>{turnOrder[turnIndex].name}</h3>   
        <div className="text_holder">          
            <p className="power_text">{turnOrder[turnIndex].power}</p>
            <button className="button" onClick={NextTurn}>➡️</button>
        </div>      
    </div>
}

export default Turn