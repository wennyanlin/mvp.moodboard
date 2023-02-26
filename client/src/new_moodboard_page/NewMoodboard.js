import React, { useState } from "react";
import AddElement from "./AddElement";
import SelectedMoodboard from "../all_moodboard_page/SelectedMoodboard";

const NewMoodboard = (props) => {
  let [elements, setElements] = useState([]);
  let [boardName, setBoardName] = useState("");

  const handleAddElements = (value, type) => {
    setElements([...elements, { type, value }]);
    
  };
  const handleSubmit = () => {
    props.addMoodboardCb(boardName, elements);
  };

  const handleChangeBoardName = (event) => {
    setBoardName(event.target.value);
  };
  return (
    <div>
      <h3>New Moodboard</h3>
      <AddElement addElements={handleAddElements} />
      <SelectedMoodboard board1={elements} />
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
