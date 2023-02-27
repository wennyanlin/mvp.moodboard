import React from "react";
import "./ThumbGrid.css";

const ThumbGrid = (props) => {
  return (
    <div>
      <ul className="list-group" >
        {props.moodboardName.map((n, i) => (
          <li className="list-group-item" onClick={(e) => props.showBoardCb1(n)} key={i}>
              {n}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ThumbGrid;
