import React from "react";
import "./SelectedMoodboard.css";

const SelectedMoodboard = (props) => {
  console.log(props);
  return (
    <div className="displayArea">
      {props.board1.map((element, index) => {
        if (element.type === "label") {
          return (
            <p
              style={{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 5,
              }}
              key={index}
            >
              {element.value}
            </p>
          );
        } else {
          return (
            <img
              style={{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 1,
              }}
              key={index}
              src={element.value}
            />
          );
        }
      })}
    </div>
  );
};

export default SelectedMoodboard;
