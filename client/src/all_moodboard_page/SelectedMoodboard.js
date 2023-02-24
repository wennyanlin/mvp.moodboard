import React from "react";
import "./SelectedMoodboard.css";

// props
/*
props {
    elements: [
        {
            id: 1,
            boardId: 2,
            type: label,
            value: text
       },
       {
            id: 2,
            boardId: 2,
            type: image,
            value: "Hello.jpg"
       }
    ]
}

*/

const SelectedMoodboard = (props) => {
    console.log(props.board1);
  return (
    <div className="displayArea">
      {props.board1.map((element) => {
        if (element.type === "label") {
          return <p key={element.id}>{element.value}</p>;
        } else {
          return <img key={element.id} src={element.value} />;
        }
      })}
    </div>
  );
};

export default SelectedMoodboard;
