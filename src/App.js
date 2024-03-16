import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Ime aplikacije </h1>
      <div className='navbar'> 
        <a href='#'> Home </a>
        <a> Games </a>
        <a> Rewards </a>
        <a> Login </a>
      </div>
      <div className='main-content'>
        <p id="OPIS">
           Dobrodošli u prvu humanitarnu kockarnicu! Cilj naše aplikacije je da uz adrenalinsko uzbuđenje igara na sreću učinimo
           nešto lepo, a takođe omogućimo našim korisnicima da osvoje vredne nagrade.
        </p>   
      </div>
    </div>
  );
}

export default App;
