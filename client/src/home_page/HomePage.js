import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the moodboard</h1>
      <Link to="/moodboards">All Moodboards</Link>
      <Link to="/new_moodboard">New Moodboard</Link>
    </div>
  );
};

export default HomePage;
