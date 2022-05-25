import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header";
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import PublicationPage from './pages/publicationPage'
import CreatePostPage from './pages/CreatePostPage';
import Login from './pages/Login';
import ProfilePage from "./pages/ProfilePage";
import UserSettings from "./pages/UserSettings";
import ProfileCommentsPage from './pages/ProfileCommentsPage';
import ProfileQuestionsPage from './pages/ProfileQuestionsPage';
import ProfileFollowersPage from './pages/ProfileFollowersPage';
import ProfileFollowingsPage from './pages/ProfileFollowingsPage';
import ProfileHelpPage from './pages/ProfileHelpPage';
// import Menu from "./components/menu/menu";

function App() {
  // example of how we can interact with node API by sending Http requests using userEffect method
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <>
      <div style={{paddingTop:'64px', backgroundColor:'#F7F5F2', zIndex:0}}>

      {/* <p>{!data ? "Loading..." : data}</p> */} 
        {/* <Menu></Menu> */}
        <Routes>
        <Route path="/" exact element={<HomePage className="element"/>}/>
        <Route path="/user-settings" exact element={<UserSettings className="element"/>}/>
        <Route path="/post" exact element={<PublicationPage className="element"/>}/>
        <Route path="/create-post" exact element={<CreatePostPage className="element"/>}/>
        <Route path="/saved-post" exact element={<h2>this is the home page</h2>} />
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/sign-up" exact element={<Signup/>}/>
        <Route path="/my-profile" exact element={<ProfilePage/>}/>
        <Route path="/my-profile/comments" exact element={<ProfileCommentsPage/>}/>
        <Route path="/my-profile/questions" exact element={<ProfileQuestionsPage/>}/>
        <Route path="/my-profile/followers" exact element={<ProfileFollowersPage/>}/>
        <Route path="/my-profile/followings" exact element={<ProfileFollowingsPage/>}/>
        <Route path="/my-profile/questions" exact element={<ProfileQuestionsPage/>}/>
        <Route path="/my-profile/help" exact element={<ProfileHelpPage/>}/>




        <Route path="/user" exact element={<h2>this is the home page</h2>}/>
      </Routes>
      </div>

    </>
  );
}

export default App;
