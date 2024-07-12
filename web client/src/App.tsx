import React, { useState } from "react";
import MyGallery from "./Components/MyGallary";
import Quiz from "./Components/Quiz";
import Results from "./Components/Results"; // Assuming you have a Results component
import "./App.css";

const App: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const toggleContent = () => {
    setShowQuiz(!showQuiz);
    setShowResults(false); // Ensure results are hidden when switching to quiz
  };

  const toggleResults = () => {
    setShowResults(!showResults);
    setShowQuiz(false); // Ensure quiz is hidden when showing results
  };

  return (
    <div className="container">
      <h2 className="title">Mande hygge 2024</h2>
      <div className="button-container">
        <button onClick={toggleContent} className="toggle-btn">
          {showQuiz ? "Vis Galleri" : "Vis Quiz"}
        </button>
        <button onClick={toggleResults} className="toggle-btn">
          {showResults ? "Skjul Resultater" : "Vis Resultater"}
        </button>
      </div>

      {showQuiz ? (
        <div className="quiz-container">
          <Quiz />
        </div>
      ) : (
        <div className="gallery-container">
          <MyGallery />
        </div>
      )}

      {showResults && (
        <div className="results-container">
          <Results />
        </div>
      )}
    </div>
  );
};

export default App;
