import React from "react";
import Row from "./Row";

export default function Grid({ currentGuess, guesses, turn, wordLength, guessChance }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return (
            <Row key={i} currentGuess={currentGuess} wordLength={wordLength} guessChance={guessChance}/>
          );
        }
        return <Row key={i} guess={g} wordLength={wordLength} guessChance={guessChance}/>;
      })}
    </div>
  );
}
