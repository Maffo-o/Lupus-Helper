import { useState, useEffect } from 'react';
import PairButton from './pairButton' 
import translations from './translations'
import '../index.css'

function PairListElement({element, name, index, rolesList, curse, drunk, language}) {

  const buttonsCount = [0, 1, 2, 3, 4, 5];
  const currentTranslations = translations[language];
  const localizedRole = element.translations?.[language] ?? element;
  const drunkRoleName = rolesList.find(role => role.name === "Ubriacone")?.translations?.[language]?.name ?? "Ubriacone";
  const [alive, setAlive] = useState(true);
  const [siblings, setSiblings] = useState(false);
  useEffect(() => {CalculateSiblings();}, []);
  function CalculateSiblings() {
    if (index == 0 && rolesList[rolesList.length -1].name == "Lupo Grasso")
      setSiblings(true);
    else if (index != 0 && rolesList[index -1].name == "Lupo Grasso")
      setSiblings(true);
      
    if (index == rolesList.length -1 && rolesList[0].name == "Lupo Grasso")
      setSiblings(true);
    else if (index != rolesList.length -1 && rolesList[index +1].name == "Lupo Grasso")
      setSiblings(true);
  }
  function ShowPower() {
    if (drunk == index)
      alert(localizedRole.power + "\n" + currentTranslations.drunkPowerDisclosure);
    else
      alert(localizedRole.power);
  }
  function ChangeAlive() {
    setAlive(!alive);
  }

  return <>
    <div>
      <span className="list_element">{name}</span>
      {drunk == index && <span className="list_element neutral_role" onClick={ShowPower}>{currentTranslations.drunkRoleLabel} ({localizedRole.name})</span>}  
      {(drunk != index && element.team == "Villaggio") && <span className="list_element good_role" onClick={ShowPower}>{localizedRole.name}</span>}
      {(drunk != index && element.team == "Lupi") && <span className="list_element bad_role" onClick={ShowPower}>{localizedRole.name}</span>}   
      {(drunk != index && element.team == "Neutrale") && <span className="list_element neutral_role" onClick={ShowPower}>{localizedRole.name}</span>}
    </div>
    <div className={`button_holder${curse != -1 ? ' button_holder_curse' : ''}`}>
      {buttonsCount.map((i) =>
        <PairButton className="element_text" index={i} element={element} siblings={siblings} isAlive={alive} setAlive={ChangeAlive} curseElement={index} curse={curse} drunk={drunk == index} key={i}/>
      )}
    </div>
  </>
}

export default PairListElement