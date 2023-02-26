import React from "react";
import "./SelectedMoodboard.css";

const SelectedMoodboard = (props) => {
  console.log(props)
  return (
    <div className="displayArea">
      {props.board1.map((element, index) => {
        if (element.type === "label") {
          return <p key={index}>{element.value}</p>;
        } else {
          return <img key={index} src={element.value} />;
        }
      })}
    </div>
  );
};

export default SelectedMoodboard;
