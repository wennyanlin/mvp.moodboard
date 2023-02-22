import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Moodboards from "../all_moodboard_page/Moodboards";
import NewMoodboard from "../new_moodboard_page/NewMoodboard";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the moodboard</h1>
      <Link to="/moodboards">All Moodboards</Link>
      <Link to="/new_moodboard">New Moodboard</Link>
      <Routes>
        <Route path="/new_moodboard" element={<NewMoodboard />}></Route>
        <Route path="/moodboards" element={<Moodboards />}></Route>
      </Routes>
    </div>
  );
};

export default HomePage;
