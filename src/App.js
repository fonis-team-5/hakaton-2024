import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Rewards from './Rewards';
import Login from './Login';
import Homepage from './Homepage';
import UserProfile from './UserProfile';
import Fruits from './Fruits';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="wrapper">
           <Routes>

          <Route exact path='/' element={< Homepage />}/>
          <Route path="/rewards" element={<Rewards/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<UserProfile/>} />
          <Route path="/fruits" element={<Fruits/>} />
        </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
