import * as React from "react";
import { useState } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SignUp from "./components/Registeration/SignUpPage";
import { useHistory } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import AllPoints from "./components/Points/AllPoints";

import {ReactSession} from 'react-client-session';
import ProfileActivities from "./components/Profile/ProfileActivities";
import ActivityNavigator from "./components/Activity/ActivityNavigator";
import SideMenu from "./components/Profile/SideMenu";

function App() {
  
 
  
  ReactSession.setStoreType("sessionStorage");

  return (
    <BrowserRouter>
    <Routes>
       <Route exact path="/" element={<HomePage />}/>
  
       <Route path="/Registration" element={ <RegistrationNavBar/>}/>
       <Route path="/Complains" element={ <ActivityNavigator/>}/>
       <Route path="/Points" element={<AllPoints/>}/>
       <Route path="/Profile" element = {<Profile/>}/>
      </Routes>
    </BrowserRouter>
   
  
    
  );
}

export default App;
