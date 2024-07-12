import React, { useState } from "react";
import "./quiz.css"; // Import your CSS file

const Quiz: React.FC = () => {
  // State for storing the name input
  const [name, setName] = useState("");

  // State for storing answers to questions
  const [answers, setAnswers] = useState<string[]>(Array(14).fill("")); // Initialize with empty strings

  // Function to handle name input change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Function to handle dropdown selection change for each question
  const handleAnswerChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can process the quiz submission, e.g., send data to backend or display results
    console.log("Name:", name);
    console.log("Answers:", answers);
    // Reset form or navigate to next page, etc.
  };

  // Questions array with options
  const questions = [
    {
      question: "Hvem sutter først en pik?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem får først fisse i aften?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem er grimmest?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem får SLET ingen fisse i aften?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem laver den første TO?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem kan tage en ølbong hurtigst?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem tager den langsomste ølbong?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem bliver skudt mest i paintball?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem bliver mindst skudt i paintball?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem får den hurtigste tid i Gokart?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem får den langsomste tid i Gokart?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem er mest fuld ved midnat?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Hvem køber den første runde?",
      options: [
        "Robert",
        "Simon W",
        "Mark",
        "Borch",
        "Tue",
        "Michael",
        "Theo",
        "Lau",
        "Ralph",
        "Simon H",
        "Benjamin",
        "Jonas",
        "Nicklas",
        "Marcus",
      ],
    },
    {
      question: "Kommer nogen op og slås i aften?",
      options: ["Ja", "Nej"],
    },
  ];

  return (
    <div className="quiz-container">
      <h3>Quiz</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
        {questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <select
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e)}
              required
            >
              <option value="">Vælg et svar</option>
              {q.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Quiz;
