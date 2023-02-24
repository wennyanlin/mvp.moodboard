import React from "react";
import './ThumbGrid.css';

const ThumbGrid = (props) => {
    return (
        <div className="ThumbGrid" >
            {props.moodboardName.map((n, i) => <p onClick={(e) => props.showBoardCb1(n)} key={i}>{n}</p>)}
        </div>
    )
}
export default ThumbGrid;