import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
//import Card from "./components/card/Quizcard";
const { default: QuizCard } = require('./components/card/Quizcard')

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
      answer:
        'Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
    },
  ])


  return (
    <div className="App">
      <Header />
      <main className="App__main">
      {cards.map(({ id, question, answer }) => (
        <QuizCard key={id} question={question} answer={answer} />
      ))}
         </main>
         <QuizCard />
         <QuizCard />
         <QuizCard />
        <footer>
        <Navigation />
        </footer>
    </div>
  );
}

export default App;
