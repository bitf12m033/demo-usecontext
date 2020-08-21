import React from 'react'

function Child(props) {
    return <div>
        Child Div 
        <span>Number: <b>{props.num}</b></span>
    </div>
}


export default Child;