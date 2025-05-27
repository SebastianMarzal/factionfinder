import { groups } from "../data/groups";
import { getGroupSimilarities } from "../utils/getGroupSimilarities";

export default function Result() {
  const stored = localStorage.getItem("userAnswers");
  const answers = stored ? JSON.parse(stored) : [];

  const sorted = getGroupSimilarities(answers, groups);
  const topThree = sorted.slice(0, 3);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Your Top Matches</h1>
      <ul>
        {topThree.map((group, i) => (
          <li key={i} style={{ margin: "1rem 0" }}>
            <strong>{group.name}</strong>: {group.similarity}%
          </li>
        ))}
      </ul>
    </div>
  );
}

