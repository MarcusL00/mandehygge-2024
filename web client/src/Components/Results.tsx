import React from "react";

interface ResultsProps {
  name: string;
  answers: string[];
}

const Results: React.FC<ResultsProps> = ({ name, answers }) => {
  // Define the correct answers (you may need to adjust this based on your logic)
  const correctAnswers = [
    "Simon W", // Example correct answers for each question
    "Benjamin",
    "Mark",
    "Ja",
    "Tue",
    "Simon H",
    "Lau",
    "Ralph",
    "Mark",
    "Theo",
    "Tue",
    "Nicklas",
    "Robert",
    "Nej",
  ];

  // Function to calculate the number of correct answers
  const calculateScore = (): number => {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        score++;
      }
    }
    return score;
  };

  const score = calculateScore();

  return (
    <div className="results-container">
      <h3>Results for {name}</h3>
      <p>Number of correct answers: {score}</p>
    </div>
  );
};

export default Results;
