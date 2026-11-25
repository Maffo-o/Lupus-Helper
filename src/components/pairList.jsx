import PairListElement from './pairListElement' 
import translations from './translations'
import '../index.css'

function PairList({playersList, rolesList, curse, drunk, enchanted, wolf, language}) {
    const currentTranslations = translations[language];

    return <>
        <span className="h2">{currentTranslations.playersLabel}</span>
        <div className="game_players">
            <ol className="full_list list_long">
            {playersList.map((name, index) =>
                <PairListElement className="element_text" name={name} element={rolesList[index]} rolesList={rolesList} index={index} curse={curse} drunk={drunk} enchanted={enchanted} wolf={wolf} language={language} key={index}/>
            )}
            </ol>
        </div>
    </>
}

export default PairList