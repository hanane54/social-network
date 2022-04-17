import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<h2>this is the home page</h2>}/>
      </Routes>
    </>
  );
}

export default App;
