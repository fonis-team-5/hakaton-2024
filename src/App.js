import "./App.css";
import Cards from "./Cards";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <p id="OPIS">
          Dobrodošli u prvu humanitarnu kockarnicu! Cilj naše aplikacije je da
          uz adrenalinsko uzbuđenje igara na sreću učinimo nešto lepo, a takođe
          omogućimo našim korisnicima da osvoje vredne nagrade.
        </p>
        <Cards />
      </div>
    </div>
  );
}

export default App;
