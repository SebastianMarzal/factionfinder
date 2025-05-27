interface Props {
  question: string;
  options: string[];
  selectedValue?: number;
  onAnswer: (value: number) => void;
}

const valueMap = [-2, -1, 0, 1, 2];
const labelMap = ["A", "B", "C", "D", "E"];

export default function QuestionCard({ question, options, selectedValue, onAnswer }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{question}</h2>
      <ul className="space-y-2">
        {options.map((text, index) => {
          const value = valueMap[index];
          const isSelected = value === selectedValue;
          return (
            <li key={index} className="flex items-center space-x-2">
              <button
                className={`px-4 py-2 font-bold rounded-full ${
                  isSelected ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => onAnswer(value)}
              >
                {labelMap[index]}
              </button>
              <span className="text-gray-800">{text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

