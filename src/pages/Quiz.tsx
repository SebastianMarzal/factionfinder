import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function Quiz() {
  const [answers, setAnswers] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (value: number) => {
    const updatedAnswers = [...answers, value];
    setAnswers(updatedAnswers);

    if (updatedAnswers.length === questions.length) {
      localStorage.setItem("userAnswers", JSON.stringify(updatedAnswers));
      navigate("/result");
    }
  };

  const currentQuestion = questions[answers.length];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Faction Quiz</h1>
      {currentQuestion ? (
        <QuestionCard
          question={currentQuestion.text}
          options={currentQuestion.options}
          onAnswer={handleAnswer}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

