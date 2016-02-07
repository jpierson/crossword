import * as React from 'react'

export default function WordItem(props) {
    return (
        <li>
            <input 
                type="text"
                value={props.word}
                onChange={props.changeWord}></input>
            <button onClick={props.removeWord}>X</button>
            <div>{props.word}</div>
        </li>);
}