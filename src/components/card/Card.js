import "./Card.css";

export default function Card() {
  return (
    <div className="card__body">
      <p className="card__question">Question: What's the weather like?</p>
      <p className="card__answer">Answer: Clowdy... cause it's autumn here!</p>
    </div>
  );
}
