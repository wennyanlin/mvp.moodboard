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
  }
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
  

  const addMoodboard = async (moodboard) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(moodboard),
    };
    try {
      let response = await fetch("/moodboards", options);
      if (response.ok) {
        let mbResponse = await response.json();
        return mbResponse;
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="*" element={<HomePage moodboards={moodboards} />}></Route>
        <Route path="/moodboards" element={<Moodboards moodboards={moodboards} board={board} showBoardCb={showBoard} />}></Route>
        <Route path="/new_moodboard" element={<NewMoodboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
