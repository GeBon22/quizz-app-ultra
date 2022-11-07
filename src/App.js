import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
//import Form from "./pages/Form";
import { useState } from "react";
//import Card from "./components/card/Quizcard";
const { default: QuizCard } = require('./components/card/Quizcard')

function App() {
  const [page, setPage] = useState("home");
  const handleClickPage = (pageName) => {setPage(pageName);};

  const [cards, setCards] = useState([
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
      answer:
        'Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
      bookmark: false,
      },
  ])

  function addCard(card) {setCards([...cards, card])}
  
  return (
    <div className="App">
      <Header />
      <main className="App__main">
      {cards.map(({ id, question, answer, bookmark }) => (
        <QuizCard key={id} question={question} answer={answer} bookmark={bookmark} />
      ))}
         </main>
         <QuizCard />
         <QuizCard />
         <QuizCard />
        <Navigation />
    </div>
  );

}

export default App;
