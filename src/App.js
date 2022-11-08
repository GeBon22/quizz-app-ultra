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

  //function addCard(card) {setCards([...cards, card])}
  
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

    </div>
  );

}

export default App;
