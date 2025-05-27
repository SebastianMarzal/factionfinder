// src/pages/Quiz.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import QuestionCard from "../components/QuestionCard";

export default function Quiz() {
  const [answers, setAnswers] = useState<(number | undefined)[]>(Array(questions.length).fill(undefined));
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (value: number) => {
    const updated = [...answers];
    updated[currentIndex] = value;
    setAnswers(updated);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      localStorage.setItem("userAnswers", JSON.stringify(updated));
      navigate("/result");
    }
  };

  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Question {currentIndex + 1} of {questions.length}</h1>
      <QuestionCard
        question={questions[currentIndex].text}
        options={questions[currentIndex].options}
        selectedValue={answers[currentIndex]}
        onAnswer={handleAnswer}
      />
      <div className="mt-4">
        <button
          onClick={goBack}
          className="mr-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Back
        </button>
      </div>
    </div>
  );
}
