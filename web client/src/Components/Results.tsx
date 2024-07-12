import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the interface for the Answer object
interface Answer {
  name: string;
  answers: { [key: string]: string };
}

const Results: React.FC = () => {
  const [answersData, setAnswersData] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get<Answer[]>(
          "https://quizapi.marcuslystrup.dk/api/getAnswers"
        );
        setAnswersData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>All Answers</h2>
      {answersData.length === 0 ? (
        <p>No answers found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {answersData.length > 0 &&
                Object.keys(answersData[0].answers).map((questionId) => (
                  <th key={questionId}>Question {questionId}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {answersData.map((answer, index) => (
              <tr key={index}>
                <td>{answer.name}</td>
                {Object.keys(answer.answers).map((questionId) => (
                  <td key={questionId}>{answer.answers[questionId]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Results;
