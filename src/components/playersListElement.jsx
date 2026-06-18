import playersList from './playersList' 
import '../index.css'

function PlayersListElement({element, index, onDelete}) {

    function OnDelete() {
      onDelete(index)
    }

    return <div>
        <span className="list_element">{element}</span>
        <button className="button" onClick={OnDelete}>
          ❌
        </button>
    </div>
}

export default PlayersListElement