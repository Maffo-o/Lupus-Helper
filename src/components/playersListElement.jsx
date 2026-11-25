import translations from './translations'
import '../index.css'

function PlayersListElement({element, index, onDelete, language}) {
    const currentTranslations = translations[language];

    function OnDelete() {
      onDelete(index)
    }

    return <div>
        <span className="list_element">{element}</span>
        <button className="button" onClick={OnDelete} aria-label={`${currentTranslations.removePlayerButton} ${element}`}>
          ❌
        </button>
    </div>
}

export default PlayersListElement