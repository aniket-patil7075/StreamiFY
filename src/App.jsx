import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Cardss from './components/Cardss';
import Navi from './components/Navi';
import Content from './components/Content';

function App() {

  return (
    <div>
      <Navi/>
      <Content/>
    </div>
  )
}

export default App
