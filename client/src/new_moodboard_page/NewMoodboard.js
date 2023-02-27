import React, { useState } from "react";
import AddElement from "./AddElement";
import SelectedMoodboard from "../all_moodboard_page/SelectedMoodboard";
import { randomIntFromInterval } from "../utils";
import { Link } from "react-router-dom";
import "./NewMoodboard.css";

const NewMoodboard = (props) => {
  let [elements, setElements] = useState([]);
  let [boardName, setBoardName] = useState("");

  const handleAddElements = (value, type, top, left) => {
    setElements([...elements, { type, value, top, left }]);
  };

  const randomizePosition = () => {
    const changedElements = elements.map((element) => {
      element.top = randomIntFromInterval(0, 75);
      element.left = randomIntFromInterval(0, 75);
      return element;
    });
    setElements(changedElements);
  };

  const handleSubmit = () => {
    props.addMoodboardCb(boardName, elements);
    setElements([]);
    setBoardName("");
  };

  const handleChangeBoardName = (event) => {
    setBoardName(event.target.value);
  };
  return (
    <div>
      <nav className="navbar">
        <Link className="navButton" to="/">
          Home
        </Link>
      </nav>

      <div className="container text-center">
        <h3>New Moodboard</h3>
        <div className="row">
          <div className="col-9">
            <SelectedMoodboard board1={elements} />
          </div>
          <div className="col-3">
            <AddElement addElements={handleAddElements} />
            <div>
              <button
                className="changeButton"
                type="button"
                onClick={randomizePosition}
              >
               🧸
              </button>
            </div>
            <label className="formlabel3">
              <input
                className="inputStyle"
                placeholder="Moodboard name"
                type="text"
                value={boardName}
                onChange={handleChangeBoardName}
              ></input>
            </label>
            <button className="saveButton" type="button" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMoodboard;
