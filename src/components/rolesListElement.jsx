import '../index.css'

function RolesListElement({element, prevElement, index, onEdit}) {

    function OnAdd() {
        onEdit(index, 1);
    }
    function OnRemove() {
        onEdit(index, -1);
    }
    
    return <div>
        {element.team != prevElement.team && <div className="extra_spacing_top"/>}
        {element.team == "Villaggio" && <span className="list_element good_role">{element.name}</span>}
        {element.team == "Lupi" && <span className="list_element bad_role">{element.name}</span>}   
        {element.team == "Neutrale" && <span className="list_element neutral_role">{element.name}</span>}   
        <button className="button" onClick={OnAdd}>
          ➕
        </button>
        <button className="button" onClick={OnRemove}>
          ➖
        </button>
        <span className="list_element">{element.amount}</span>
    </div>
}

export default RolesListElement