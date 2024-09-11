import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navi from './components/Navi';
import Content from './components/Content';
import Movies from './components/Movies';
import TvShows from './components/TvShows';
import Series from './components/Series';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ContextProvider from './components/ContextProvider';

function App() {

  return (
    <ContextProvider>
      <Router>
        <div className='full-height'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Tvshows" element={<TvShows />} />
            <Route path="/Series" element={<Series />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ContextProvider>
  )
}

export default App
