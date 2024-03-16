import "./App.css";
import Cards from "./Cards";
import Description from "./Description";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Description />
        <Cards />
      </div>
    </div>
  );
}

export default App;
