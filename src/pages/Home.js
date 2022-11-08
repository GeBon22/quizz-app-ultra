import "./Home.css";
import { useState } from "react";
const { default: QuizCard } = require('../components/card/Quizcard.js')
//import { useState } from "react";
//import { Card } from "../components/card/Quizcard"




export default function Home() {
  const [cards, setCards] = useState([
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
      answer:
        'Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
      bookmark: false,
      },
      {
        id: 2,
        question: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
        answer:
          '2 Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
        bookmark: false,
        },
        {
          id: 3,
          question: '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
          answer:
            '3 Voluptate id quis repudiandae, numquam molestias quae, aperiam quam sunt fuga at et sit vero unde quo dolores libero repellat, ut totam.',
          bookmark: false,
          },
  ])

  return (
    <div className="home">
    <h2>Home</h2>
    <main className="App__card-grid">
      {cards.map(({ id, question, answer, bookmark }) => (
        <QuizCard key={id} question={question} answer={answer} bookmark={bookmark} />
      ))}
         </main>
    </div>
  )
}
