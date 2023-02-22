import React, { useState } from "react";

const elementTypes = {
    imageUrl: "ImageUrl",
    label: "Label",
}

const AddElement = () => {
  const [elementValue, setElementValue] = useState("");
  const [selectElementType, setSelect] = useState(elementTypes.imageUrl);

  const handleSelectElemType = (event) => {
    const value = event.target.value;
    setSelect(selectElementType => value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleInput = (event) => {
    const value = event.target.value;
    setElementValue(elementValue => value);
    setElementValue("");

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input onChange={(event) => handleSelectElemType(event)} type="radio" checked={selectElementType === elementTypes.imageUrl} value={elementTypes.imageUrl}></input>
          Image
        </label>
        <label>
          <input onChange={(event) => handleSelectElemType(event)} type="radio" checked={selectElementType === elementTypes.label} value={elementTypes.label}></input>
          Label
        </label>
        <input type="text" onChange={(event) => handleInput(event)}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddElement;
