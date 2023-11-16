import React from 'react'
import { useEffect, useState } from 'react';
import data from "./data.json";

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)
    var char_list = data['letters']

    useEffect(()=>{
        setLetters(char_list)
	}, [])

    return (
        <div className="keypad">
            {letters && letters.map((l) => {
                const color = usedKeys[l.key]
                return (
                    <div key={l.key} className={color}>{l.key}</div>
                )
            })}
        </div>
    )
}