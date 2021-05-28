import React from 'react'

const RandomChoice = ({ onRandomClick, selectedRandomMenu }) => {
    console.log(selectedRandomMenu.rolled)
    return (
        <div>
            <button onClick={onRandomClick}>랜덤으로 고르기</button>
            { Array.isArray(selectedRandomMenu.rolled) && selectedRandomMenu.rolled.map((element, index)  => <p key={index}>{element}</p>)}
        </div>
    )
}

export default RandomChoice