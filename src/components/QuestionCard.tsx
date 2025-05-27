interface Props {
  question: string;
  options: string[];
  onAnswer: (value: number) => void;
}

const valueMap = [-2, -1, 0, 1, 2];
const labelMap = ["A", "B", "C", "D", "E"];

export default function QuestionCard({ question, options, onAnswer }: Props) {
  return (
    <div>
      <h2>{question}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {options.map((text, index) => (
          <li key={index} style={{ margin: "0.5rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={() => onAnswer(valueMap[index])}>
              {labelMap[index]}
            </button>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

