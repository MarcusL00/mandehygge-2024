import React, { useState } from "react";
import axios from "axios";
import "./quiz.css"; // Import your CSS file

// Define the interface for answers
interface Answer {
  [key: string]: string;
}

// Define the interface for the API response
interface SubmitAnswersResponse {
  success: boolean;
  message: string;
  // Add other fields based on the API response
}

// Function to submit answers
const submitAnswers = async (
  name: string,
  answers: Answer
): Promise<SubmitAnswersResponse | null> => {
  try {
    const response = await axios.post<SubmitAnswersResponse>(
      "https://quizapi.marcuslystrup.dk/api/submitAnswers",
      { name, ...answers },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting answers:", error);
    return null;
  }
};

const Quiz: React.FC = () => {
  const [name, setName] = useState("");
  const [answers, setAnswers] = useState<string[]>(Array(14).fill("")); // Initialize with empty strings
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<SubmitAnswersResponse | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAnswerChange = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
    // Prepare the answers in the format expected by the API
    const answersData: Answer = answers.reduce((acc, answer, index) => {
      acc[`answer${index + 1}`] = answer;
      return acc;
    }, {} as Answer);
    console.log(name);
    console.log(answersData);
    const result = await submitAnswers(name, answersData);

    if (result) {
      setResponse(result);
    } else {
      setError("Failed to submit answers");
    }

    setLoading(false);
  };

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
      question: "Hvem laver den første TKO?",
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
              <option value="">Vælg et pik hovede</option>
              {q.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" disabled={loading}>
          Send svar
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {response && <p>{response.message}</p>}
    </div>
  );
};

export default Quiz;
