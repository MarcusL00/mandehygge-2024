import React, { useState } from "react";
import MyGallery from "./Components/MyGallary";
import Quiz from "./Components/Quiz"; // Assuming you have a Quiz component
import "./App.css"; // Import your CSS file

const App: React.FC = () => {
  const [showGallery, setShowGallery] = useState(true);

  const toggleContent = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="container">
      <h2 className="title">Mande hygge 2024</h2>
      <button onClick={toggleContent} className="toggle-btn">
        Switch to Quiz
      </button>
      {showGallery ? (
        <div className="gallery-container">
          <MyGallery />
        </div>
      ) : (
        <div className="quiz-container">
          <Quiz />
        </div>
      )}
    </div>
  );
};

export default App;
