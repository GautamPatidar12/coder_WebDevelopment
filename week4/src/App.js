import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Upload from "./components/Upload/Upload";
import DataDisplay from "./components/DisplayData/DisplayData";

import { auth } from "./firebase";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);
      } else {
        setUserName("");
        setUserEmail("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile name={userName} email={userEmail} />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/data" element={<DataDisplay />} />
          <Route path="/" element={<Home name={userName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;