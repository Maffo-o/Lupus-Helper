import { useState, useEffect } from 'react'
import PlayersList from './components/playersList'
import RolesList from './components/rolesList'
import PairList from './components/pairList'
import Note from './components/note'
import Turn from './components/turn'
import './index.css'

function App() {

  const [turnOrder, setOrder] = useState([]);
  const [selection, setSelection] = useState(true);
  const [rolesTempList, setTempRoles] = useState([]);
  const [playerTempList, setTempPlayers] = useState([]);
  const [useCurse, setCurse] = useState(-1);
  const [useDrunk, setDrunk] = useState(-1);
  const [shouldStart, setStart] = useState(false);
  useEffect(() => {
    if (shouldStart) {
      StartGame();
      setStart(false);
    }
  }, [shouldStart]);
  function CheckCanStart() {
    if (!selection) {
      ResetGame();
      return;
    }

    rolesTempList.forEach(element => {
      if (element.name == "Maledetto")
        setCurse(Math.floor(Math.random() * playerTempList.length));
      else
        setCurse(-1);

      if (element.name == "Ubriacone")
        setDrunk(Math.floor(Math.random() * playerTempList.length));
      else 
        setDrunk(-1);
    });    
    const filteredRoles = rolesTempList.filter(element => element.name !== "Maledetto" && element.name !== "Ubriacone");
    setTempRoles(filteredRoles);

    if (playerTempList.length >= 6) {
      if (filteredRoles.length > playerTempList.length)
        alert("Ci sono troppi ruoli per i giocatori inseriti");
      else if (filteredRoles.length < playerTempList.length)
        alert("Non ci sono abbastanza ruoli per i giocatori inseriti");
      else
        setStart(true);
    }
    else
      alert("Servono minimo 6 giocatori per iniziare");
  }
  function StartGame() {
    const button = document.getElementById("game_button");
    button.innerHTML = "Termina partita";
    setSelection(false);

    let tempList = [...rolesTempList];
    tempList.sort(() => Math.random() - 0.5);
    setTempRoles(tempList);

    tempList = [...turnOrder];
    tempList = tempList.filter((element) => element.order !== -1 && element.order !== 8);
    tempList.push({
      name: "Lupi",
      team: "Lupi",
      order: 8,
      power: "I ruoli nella squadra dei lupi, si svegliano tutti insieme e decidono chi uccidere"
    });
    tempList.sort((a, b) => a.order - b.order);
    tempList.push({
      name: "Giorno",
      power: "Tutti i giocatori si svegliano per discutere e decidere chi linciare"
    });
    setOrder(tempList);
  }
  function ResetGame() {
    location.reload();
  }

  return <>
    <section className="center">
      <div>
        <h1><a className="title_link" href="https://github.com/Maffo-o/Lupus-Helper" target="_blank" rel="noopener noreferrer">Lupus in Tabula</a></h1>
      </div>
      {selection == true && <PlayersList onSet={setTempPlayers}/>}
      {selection == true && <RolesList onSet={setTempRoles} setOrder={setOrder}/>}
      {selection == false && <PairList playersList={playerTempList} rolesList={rolesTempList} setOrder={setOrder} curse={useCurse} drunk={useDrunk}/>}
      {selection == false && <Turn turnOrder={turnOrder}></Turn>}
      {selection == false && <Note></Note>}
      <button className="button start_button" id="game_button" onClick={CheckCanStart}>
        Inizia partita
      </button>
    </section>
  </>
}

export default App