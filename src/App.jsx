import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { ToastContainer, toast } from "react-toastify";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // console.log("User is signed in:", user);
        navigate("/");
      } else {
        // console.log("No user is signed in.");
        navigate("/login");
      }
    });

    // cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
