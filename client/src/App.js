import { useEffect } from "react";
import "./App.css";
import HomePage from "./home_page/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import Moodboards from "./all_moodboard_page/Moodboards";
import NewMoodboard from "./new_moodboard_page/NewMoodboard";

function App() {
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/moodboards" element={<Moodboards />}></Route>
        <Route path="/new_moodboard" element={<NewMoodboard />}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
