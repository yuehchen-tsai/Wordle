import normalData from "./data/db.json";
import hardData from "./data/harddb.json";
import { useState, useEffect } from "react";
import Wordle from './components/Wordle';
import ReloadButton from "./components/Button";

export function NormalGame() {
    return Game(normalData, 6, 6)
}

export function HardGame() {
    return Game(hardData, 7, 5)
}

function Game(data, wordLength, guessChance) {
  const [solution, setSolution] = useState(null);
  var word_list = data["solutions"];

  useEffect(() => {
    const randomSolution =
      word_list[Math.floor(Math.random() * word_list.length)];
    setSolution(randomSolution.word);
  }, []);

  return (
    <div className="Normal">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} wordLength={wordLength} guessChance={guessChance} />}
      <ReloadButton />
    </div>

  );
}

