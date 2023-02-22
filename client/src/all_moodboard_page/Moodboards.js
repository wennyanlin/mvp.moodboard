import React from "react";
import SelectedMoodboard from "./SelectedMoodboard";
import ThumbGrid from "./ThumbGrid";

const data = {
  elements: [
    {
        id: 1,
        boardId: 2,
        type: "label",
        value: "text"
   },
   {
        id: 2,
        boardId: 2,
        type: "image",
        value: "Hello.jpg"
   }
]
}
const Moodboards = () => {
  return (
    <div>
      <h3>All Moodboards</h3>
      <div>
        <SelectedMoodboard elements={data.elements} />
      </div>
      <div>
      <ThumbGrid />
      </div>
    </div>
  );
};

export default Moodboards;
