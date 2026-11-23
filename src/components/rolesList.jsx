import { useState, useEffect } from 'react'
import RolesListElement from './rolesListElement' 
import { rolesList as availableRoles } from './rolesData'
import '../index.css'

function RolesList({onSet, setOrder}) {

    const [rolesList, setRoles] = useState(() => {
        const savedAmounts = JSON.parse(localStorage.getItem('lupus-helper.roles') || '{}');
        return availableRoles.map(role => ({
            ...role,
            amount: Math.min(role.max, Math.max(0, Number(savedAmounts[role.name]) || 0))
        }));
    });
    useEffect(() => {
        const selectedRoles = [];
        rolesList.forEach(element => {
            for (let i = 0; i < element.amount; i++)
                selectedRoles.push({ name: element.name, team: element.team, order: element.order, power: element.power });
        });
        const savedAmounts = Object.fromEntries(rolesList.map(role => [role.name, role.amount]));
        localStorage.setItem('lupus-helper.roles', JSON.stringify(savedAmounts));
        onSet(selectedRoles);
        setOrder(selectedRoles);
    }, [rolesList, onSet, setOrder]);

    function OnEdit(index, amount) {
        let newAmount = rolesList[index].amount;
        const maxAmount = rolesList[index].max;
        if (maxAmount == 2)
            newAmount += (amount *2);
        else 
            newAmount += amount;
        newAmount = Math.max(0, newAmount);
        newAmount = Math.min(maxAmount, newAmount);

        const updated = [...rolesList];
        updated[index] = {
            ...updated[index],
            amount: newAmount
        };
        setRoles(updated);
    }

    return <>
        <div>
            <h2>Seleziona i ruoli</h2>
        </div>
        <div>
            <ol className="full_list">
            {rolesList.map((element, index) =>
                <RolesListElement className="element_text" element={element} prevElement={index == 0 ? rolesList[index] : rolesList[index -1]} index={index} onEdit={OnEdit} key={index}/>
            )}
            </ol>      
        </div>
    </>
}

export default RolesList