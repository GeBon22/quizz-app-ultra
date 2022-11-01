import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main className="App__main">
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
}

export default App;
