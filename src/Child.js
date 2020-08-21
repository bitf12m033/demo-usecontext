import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
    let value = useContext(ValueContext);
    return <div>
        Child Div 
<span>Number: <b>{value}</b></span>
    </div>
}


export default Child;