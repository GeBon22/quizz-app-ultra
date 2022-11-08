import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./pages/Form";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
//import Card from "./components/card/Quizcard";
const { default: QuizCard } = require('./components/card/Quizcard')


function App() {
  const [page, setPage] = useState("home");
  //const handleClickPage = (pageName) => {setPage(pageName);};

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

  function addCard(card) {setCards([...cards, card])}
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
        <Navigation />
      </Router>
      <main className="App__main">
      {cards.map(({ id, question, answer, bookmark }) => (
        <QuizCard key={id} question={question} answer={answer} bookmark={bookmark} />
      ))}
         </main>
    </div>
  );

}

export default App;
