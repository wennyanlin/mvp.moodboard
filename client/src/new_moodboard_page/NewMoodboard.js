import React, { useState } from "react";
import AddElement from "./AddElement";
import SelectedMoodboard from "../all_moodboard_page/SelectedMoodboard";
import { randomIntFromInterval } from "../utils";

const NewMoodboard = (props) => {
  let [elements, setElements] = useState([]);
  let [boardName, setBoardName] = useState("");

  const handleAddElements = (value, type, top, left) => {
    setElements([...elements, { type, value, top, left }]);
  };
  console.log(elements);
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
      <h3>New Moodboard</h3>
      <AddElement addElements={handleAddElements} />
      <SelectedMoodboard board1={elements} />
      <button type="button" onClick={randomizePosition}>
        Change
      </button>
      <label>
        Moodboard Name
        <input
          type="text"
          value={boardName}
          onChange={handleChangeBoardName}
        ></input>
      </label>
      <button type="button" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default NewMoodboard;
