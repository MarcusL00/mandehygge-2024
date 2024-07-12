import React, { useState } from "react";
import MyGallery from "./Components/MyGallary";
import Quiz from "./Components/Quiz"; // Assuming you have a Quiz component
import "./App.css"; // Import your CSS file

const App: React.FC = () => {
  const [showGallery, setShowGallery] = useState(true);
  const [showResults, setShowResults] = useState(true);

  const toggleResults = () => {
    setShowResults(!showResults);
  };

  const toggleContent = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="container">
      <h2 className="title">Mande hygge 2024</h2>
      <button onClick={toggleContent} className="toggle-btn">
        Quiz
      </button>
      <button onClick={toggleResults} className="toggle-btn">
        Resultat
      </button>

      {/* Conditional rendering using ternary operator */}
      {showGallery || showResults ? (
        <div className="gallery-container">
          {showGallery && <MyGallery />}
          {showResults && <Quiz />}
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
