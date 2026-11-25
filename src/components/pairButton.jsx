import { useState, useEffect } from 'react';
import '../index.css'

function PairButton({element, index, siblings, isAlive, setAlive, curseElement, curse, drunk, enchanted, wolf}) {

    const [buttonState, setState] = useState(true);
    const [buttonTripleState, setTripleState] = useState(0);
    const [icon, setIcon] = useState([]);
    useEffect(() => { ChangeIcon(); }, [siblings, curse, curseElement, isAlive]);
    function ChangeIcon() {
        switch (index) {
            case 0:
                setIcon(["🧑‍🦰", "💀"]);
                break;
            case 1:
                setIcon(["🟦", "🟥", "🟨"]);
                if (drunk || curse == curseElement)
                    setTripleState(2);
                else if (element.id == "loser" || siblings)
                    setTripleState(1);
                else if (element.id == "assassin" || element.id == "cultists")
                    setTripleState(0);
                else if (element.teamId == "village")
                    setTripleState(0);
                else if (element.teamId == "wolves")
                    setTripleState(1);
                else if (element.teamId == "neutral")
                    setTripleState(2);
                break;
            case 2:
                setIcon(["👍", "🗡️"]);
                break;
            case 3:
                setIcon(["⚠️", "🛡️"]);
                break;
            case 4:
                setIcon(["🅿️", "⛔"]);
                break;
            case 5:
                setIcon(["🙂", "👿"]);
                if (curse == curseElement)
                    setState(false);
                break;
            case 6:
                setIcon(["🙂", "✨"]);
                break;            
        }
    }
    function OnToggle() {
        if (index == 1) {
            let temp = buttonTripleState;
            temp++;
            if (temp > 2)
                temp = 0;
            setTripleState(temp);
        }
        else 
        {
            setState(!buttonState);
            if (index == 0)
                setAlive();
        }          
    }

    return <>
        {index == 0 && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
        {(index > 1 && index < 4 && isAlive) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
        {(index == 1 && isAlive) && <button className="button" onClick={OnToggle}>
            {icon[buttonTripleState]}
        </button>}
        {(index == 4 && element.singleUsePower == 1 && isAlive) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
        {(index == 5 && curse != -1 && isAlive) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
        {((index == 6 && isAlive && enchanted != -1)) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
    </>
}

export default PairButton