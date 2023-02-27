import React from "react";
import SelectedMoodboard from "./SelectedMoodboard";
import ThumbGrid from "./ThumbGrid";
import "./Moodboards.css";
import { Link } from "react-router-dom";

const Moodboards = (props) => {
  return (
    <div>
      <nav className="navbar">
        <Link className="navButton" to="/">
          Home
        </Link>
      </nav>
      <h3>All Moodboards</h3>
      <div className="container text-center">
        <div className="row">
          <div className="col-10">
            <SelectedMoodboard board1={props.board} />
          </div>
          <div className="col-2">
            <ThumbGrid
              showBoardCb1={props.showBoardCb}
              moodboardName={Array.from(
                new Set(props.moodboards.map((m) => m.name))
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moodboards;
