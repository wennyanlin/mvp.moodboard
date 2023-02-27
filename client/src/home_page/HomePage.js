import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="backgroundPic">
      <h1 className="ms-200px">Welcome to my moodboard</h1>
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 btn-name">
              <Link className="btn btn-primary" to="/moodboards">
                All Moodboards
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <Link className="btn btn-primary" to="/new_moodboard">New Moodboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
