import "./Quizcard.css";
import "./Button.css";
import { useState } from "react";

export default function Card( {question, answer}) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="card__body">
      <p className="card__question">{question}</p>
      <button className="button" onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? "Show Answer" : "Hide Answer"}</button>
      {showAnswer && <p className="card__answer">{answer}</p>}
    </div>
  );
}

//TODO: add-function for quizcards