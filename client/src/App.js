import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./home_page/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import Moodboards from "./all_moodboard_page/Moodboards";
import NewMoodboard from "./new_moodboard_page/NewMoodboard";

function App() {
  let [moodboards, setMoodboards] = useState([]);
  let [board, setBoard] = useState([]);

  const showBoard = (name) => {
    // console.log(name);
    let selectedBoard = moodboards.filter((b) => b.name === name);
    setBoard(selectedBoard);
  };
  useEffect(() => {
    getAllMoodboard();
  }, []);

  const getAllMoodboard = async () => {
    try {
      let response = await fetch("/moodboards");
      if (response.ok) {
        const mbsResponse = await response.json();
        setMoodboards(mbsResponse);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  const addMoodboard = async (name, elements) => {
    // console.log(name, elements)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, elements }),
    };
    try {
      let response = await fetch("/moodboards", options);
      if (response.ok) {
        let mbResponse = await response.json();
        await getAllMoodboard();
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="App" >
      
      <Routes>
        <Route path="*" element={<HomePage moodboards={moodboards} />}></Route>
        <Route
          path="/moodboards"
          element={
            <Moodboards
              moodboards={moodboards}
              board={board}
              showBoardCb={showBoard}
            />
          }
        ></Route>
        <Route
          path="/new_moodboard"
          element={<NewMoodboard board={board} addMoodboardCb={addMoodboard} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
