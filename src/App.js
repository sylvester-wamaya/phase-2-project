import React from 'react';
import {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Watched from './components/Watched';
import Watchlist from './components/Watchlist';
import Add from './components/Add';
import './App.css';
import "./lib/font-awesome/css/all.min.css"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Watchlist/>}/>
        <Route path='/wathed' element={<Watched/>}/>
        <Route path='/add' element={<Add/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
