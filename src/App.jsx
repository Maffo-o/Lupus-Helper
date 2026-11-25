import { useState, useEffect } from 'react'
import PlayersList from './components/playersList'
import RolesList from './components/rolesList'
import PairList from './components/pairList'
import Note from './components/note'
import Turn from './components/turn'
import Header from './components/header'
import PowerDescription from './components/powerDescription'
import translations from './components/translations'
import './index.css'

function App() {

  const [turnOrder, setOrder] = useState([]);
  const [selection, setSelection] = useState(true);
  const [rolesTempList, setTempRoles] = useState([]);
  const [playerTempList, setTempPlayers] = useState([]);
  const [useCurse, setCurse] = useState(-1);
  const [useDrunk, setDrunk] = useState(-1);
  const [shouldStart, setStart] = useState(false);
  const [language, setLanguage] = useState('it');
  const [listResetKey, setListResetKey] = useState(0);
  const [modalState, setModalState] = useState({ isOpen: false, title: '', content: '' });
  const currentTranslations = translations[language];
  
  useEffect(() => {
    if (shouldStart) {
      StartGame();
      setStart(false);
    }
  }, [shouldStart]);
  
  function ShowModal(title, content) {
    setModalState({ isOpen: true, title, content });
  }
  
  function CloseModal() {
    setModalState({ isOpen: false, title: '', content: '' });
  }
  
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
        ShowModal(currentTranslations.error || 'Errore', currentTranslations.tooManyRoles);
      else if (filteredRoles.length < playerTempList.length)
        ShowModal(currentTranslations.error || 'Errore', currentTranslations.notEnoughRoles);
      else
        setStart(true);
    }
    else
      ShowModal(currentTranslations.error || 'Errore', currentTranslations.minimumPlayers);
  }
  function StartGame() {
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
      power: "I ruoli nella squadra dei lupi, si svegliano tutti insieme e decidono chi uccidere",
      translations: {
        en: {
          name: "Wolves",
          power: "The wolves wake together and decide which player to kill."
        }
      }
    });
    tempList.sort((a, b) => a.order - b.order);
    tempList.push({
      name: "Giorno",
      power: "Tutti i giocatori si svegliano per discutere e decidere chi linciare",
      translations: {
        en: {
          name: "Day",
          power: "All players wake up to discuss and decide whom to lynch."
        }
      }
    });
    setOrder(tempList);
  }
  function ResetGame() {
    location.reload();
  }
  function ResetSelection() {
    localStorage.removeItem('lupus-helper.players');
    localStorage.removeItem('lupus-helper.roles');
    setTempPlayers([]);
    setTempRoles([]);
    setOrder([]);
    setCurse(-1);
    setDrunk(-1);
    setStart(false);
    setListResetKey(key => key + 1);
  }

  return <>
    <section className="center">
      <Header language={language} onLanguageChange={setLanguage} />
      {selection == true && <PlayersList key={`players-${listResetKey}`} onSet={setTempPlayers} language={language}/>}
      {selection == true && <RolesList key={`roles-${listResetKey}`} onSet={setTempRoles} setOrder={setOrder} language={language}/>}
      {selection == false && <PairList playersList={playerTempList} rolesList={rolesTempList} setOrder={setOrder} curse={useCurse} drunk={useDrunk} language={language}/>}
      {selection == false && <Turn turnOrder={turnOrder} language={language}></Turn>}
      {selection == false && <Note language={language}></Note>}
      <div className="start_actions">
        <button className="button start_button" id="game_button" onClick={selection ? CheckCanStart : ResetGame}>
          {selection ? currentTranslations.startGame : currentTranslations.endGame}
        </button>
        {selection && <button className="button start_button" onClick={ResetSelection}>
          {currentTranslations.resetButton}
        </button>}
      </div>
    </section>
    <PowerDescription 
      isOpen={modalState.isOpen}
      title={modalState.title}
      content={modalState.content}
      onClose={CloseModal}
    />
  </>
}

export default App