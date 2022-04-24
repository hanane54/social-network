import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header"

function App() {
  return (
    <>
      <Header />
      <div style={{paddingTop:'64px', backgroundColor:'#F7F5F2'}}>
        <Routes>
        <Route path="/" exact element={<h2>this is the home page</h2>}/>
        <Route path="/user-settings" exact element={<h2>this is the home page</h2>}/>
        <Route path="/post" exact element={<h2>this is the home page</h2>}/>
        <Route path="/publish-post" exact element={<h2>this is the home page</h2>}/>
        <Route path="/login" exact element={<h2>this is the home page</h2>}/>
        <Route path="/signup" exact element={<h2>this is the home page</h2>}/>
        <Route path="/myprofile" exact element={<h2>this is the home page</h2>}/>
        <Route path="/user" exact element={<h2>this is the home page</h2>}/>
      </Routes>
      </div>
      
    </>
  );
}

export default App;
