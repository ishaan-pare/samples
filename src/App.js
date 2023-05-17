import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Update from "./Pages/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          {/* <Route exact path="/" element={<Home/>}/> */}
          <Route exact path="/" element={<Update/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
