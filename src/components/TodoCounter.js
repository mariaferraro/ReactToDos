import React from 'react';
import '../styles/TodoCounter.css'

function TodoCounter(props){
    return(
        <div className='titles'>
            <h1>Your To-Dos</h1>
            <h2>{props.completed} of {props.total} completed</h2>
        </div>
    )
}

export {TodoCounter};