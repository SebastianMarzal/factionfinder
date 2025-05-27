import { groups } from "../data/groups";
import { getGroupSimilarities } from "../utils/getGroupSimilarities";

export default function Result() {
  const stored = localStorage.getItem("userAnswers");
  const answers = stored ? JSON.parse(stored) : [];

  const ranked = getGroupSimilarities(answers, groups);
  const [topGroup, ...others] = ranked;
  const groupData = groups.find(g => g.name === topGroup.name);

  if (!groupData) return <p>Group not found.</p>;

  const resetQuiz = () => {
    localStorage.removeItem("userAnswers");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">You most closely align with: <span className="text-blue-600">{groupData.name}</span></h1>
          <img src={groupData.image} alt={groupData.name} className="w-full max-w-md rounded shadow" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Description</h2>
          <p>{groupData.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Leaders</h2>
          <ul className="list-disc pl-5">
            {groupData.leaders.map((leader, i) => <li key={i}>{leader}</li>)}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Policy Positions</h2>
          <ul className="space-y-2 pl-5">
            <li><strong>Immigration:</strong> {groupData.positions.immigration}</li>
            <li><strong>Race Relations:</strong> {groupData.positions.race}</li>
            <li><strong>Gender Relations:</strong> {groupData.positions.gender}</li>
            <li><strong>Religion & Morality:</strong> {groupData.positions.religion}</li>
            <li><strong>Economy:</strong> {groupData.positions.economy}</li>
            <li><strong>Foreign Policy:</strong> {groupData.positions.foreign}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Further Reading</h2>
          <ul className="list-disc pl-5">
            {groupData.sources.map((source, i) => <li key={i}>{source}</li>)}
          </ul>
        </div>

        <button
          onClick={resetQuiz}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retake Quiz
        </button>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-64 border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-4">
        <h2 className="text-lg font-semibold mb-2">Other Matches</h2>
        <ul className="space-y-1">
          {others.map((g, i) => (
            <li key={i} className="flex justify-between">
              <span>{g.name}</span>
              <span>{g.similarity}%</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

