import { useState, useEffect } from 'react';
import PairButton from './pairButton' 
import PowerPopup from './powerPopup'
import translations from './translations'
import '../index.css'

function PairListElement({element, name, index, rolesList, curse, drunk, enchanted, wolf, language}) {

  const buttonsCount = [0, 1, 2, 3, 4, 5, 6];
  const currentTranslations = translations[language];
  const localizedRole = element.translations?.[language] ?? element;
  const [alive, setAlive] = useState(true);
  const [siblings, setSiblings] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  
  useEffect(() => {
    console.log('PairListElement rendered with element:', element);
    CalculateSiblings();
  }, []);
  
  function CalculateSiblings() {
    if (index == 0 && rolesList[rolesList.length -1].id == "big_bad_wolf")
      setSiblings(true);
    else if (index != 0 && rolesList[index -1].id == "big_bad_wolf")
      setSiblings(true);
      
    if (index == rolesList.length -1 && rolesList[0].id == "big_bad_wolf")
      setSiblings(true);
    else if (index != rolesList.length -1 && rolesList[index +1].id == "big_bad_wolf")
      setSiblings(true);
  }
  
  function ShowPower() {
    let content = localizedRole.power;
    if (drunk == index)
      content += "\n" + currentTranslations.drunkPowerDisclosure;
    setModalContent(content);
    setIsModalOpen(true);
  }
  
  function ChangeAlive() {
    setAlive(!alive);
  }

  return <>
    <div>
      <span className="list_element">{name}</span>
      {drunk == index && <span className="list_element neutral_role" onClick={ShowPower}>{currentTranslations.drunkRoleLabel} ({localizedRole.name})</span>}  
      {(drunk != index && element?.teamId === "village") && <span className="list_element good_role" onClick={ShowPower}>{localizedRole.name}</span>}
      {(drunk != index && element?.teamId === "wolves") && <span className="list_element bad_role" onClick={ShowPower}>{localizedRole.name}</span>}   
      {(drunk != index && element?.teamId === "neutral") && <span className="list_element neutral_role" onClick={ShowPower}>{localizedRole.name}</span>}
      {(drunk != index && !element?.teamId) && <span className="list_element" onClick={ShowPower}>{localizedRole.name}</span>}
    </div>
    <div className={`button_holder${curse != -1 ? ' button_holder_curse' : ''}`}>
      {buttonsCount.map((i) =>
        <PairButton className="element_text" index={i} element={element} siblings={siblings} isAlive={alive} setAlive={ChangeAlive} curseElement={index} curse={curse} drunk={drunk == index} enchanted={enchanted} wolf={wolf} key={i}/>
      )}
    </div>
    <PowerPopup 
      isOpen={isModalOpen}
      title={localizedRole.name}
      content={modalContent}
      onClose={() => setIsModalOpen(false)}
    />
  </>
}

export default PairListElement