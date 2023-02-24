import React from "react";
import SelectedMoodboard from "./SelectedMoodboard";
import ThumbGrid from "./ThumbGrid";
import "./Moodboards.css";

const Moodboards = (props) => {
  return (
    <div>
      <h2>All Moodboards</h2>
      <div className="container">
        <SelectedMoodboard 
          board1={props.board}
        />
        <ThumbGrid showBoardCb1={props.showBoardCb}
          moodboardName={Array.from(
            new Set(props.moodboards.map((m) => m.name))
          )}
        />
      </div>
    </div>
  );
};

export default Moodboards;
