import { useState, useEffect } from 'react';
import '../index.css'

function PairButton({element, index, siblings, curseElement, curse, drunk}) {

    const [buttonState, setState] = useState(true);
    const [buttonTripleState, setTripleState] = useState(0);
    const [icon, setIcon] = useState([]);
    useEffect(() => { ChangeIcon(); }, [siblings, curse, curseElement]);
    function ChangeIcon() {
        switch (index) {
            case 0:
                setIcon(["🧑‍🦰", "💀"]);
                break;
            case 1:
                setIcon(["🟦", "🟥", "🟨"]);
                if (drunk || curse == curseElement)
                    setTripleState(2);
                else if (element.name == "Sfigato" || siblings)
                    setTripleState(1);
                else if (element.name == "Assassino" || element.name == "Cultisti")
                    setTripleState(0);
                else if (element.team == "Villaggio")
                    setTripleState(0);
                else if (element.team == "Lupi")
                    setTripleState(1);
                else if (element.team == "Neutrale")
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
            setState(!buttonState);
    }

    return <>
        {(index != 1 && index != 5) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
        {(index == 1 && index != 5) && <button className="button" onClick={OnToggle}>
            {icon[buttonTripleState]}
        </button>}
        {(index == 5 && curse != -1) && <button className="button" onClick={OnToggle}>
            {buttonState ? icon[0] : icon[1]}
        </button>}
    </>
}

export default PairButton