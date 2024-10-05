import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProfilePage from "./components/ProfilePage";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import {auth} from "./components/Firebase"
import { useState, useEffect } from "react";

function App() {
const [user,setUser] = useState(null);
useEffect(()=>{
auth.onAuthStateChanged((user) => {
  setUser(user);
});
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={user?<ProfilePage/>:<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
