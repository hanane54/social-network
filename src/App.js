import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';

import PublicationPage from './pages/publicationPage'
import CreatePostPage from './pages/CreatePostPage';
// import Menu from "./components/menu/menu";

function App() {
  return (
    <>
      <Header />
      <div style={{paddingTop:'64px', backgroundColor:'#F7F5F2', zIndex:0}}>
        {/* <Menu></Menu> */}
        <Routes>
        <Route path="/" exact element={<HomePage className="element"/>}/>
        <Route path="/user-settings" exact element={<h2>this is the home page</h2>}/>
        <Route path="/post" exact element={<PublicationPage className="element"/>}/>
        <Route path="/create-post" exact element={<CreatePostPage className="element"/>}/>
        <Route path="/saved-post" exact element={<h2>this is the home page</h2>} />
        <Route path="/login" exact element={<h2>this is the home page</h2>}/>
        <Route path="/sign-up" exact element={<Signup/>}/>
        <Route path="/my-profile" exact element={<h2>this is the home page</h2>}/>
        <Route path="/user" exact element={<h2>this is the home page</h2>}/>
      </Routes>
      </div>

    </>
  );
}

export default App;
