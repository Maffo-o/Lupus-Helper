import { useState } from 'react';
import PairListElement from './pairListElement' 
import '../index.css'

function PairList({playersList, rolesList, curse, drunk}) {

    return <>
        <span className="h2">Giocatori</span>
        <div>
            <ol className="full_list list_long">
            {playersList.map((name, index) =>
                <PairListElement className="element_text" name={name} element={rolesList[index]} rolesList={rolesList} index={index} curse={curse} drunk={drunk} key={index}/>
            )}
            </ol>
        </div>
    </>
}

export default PairList