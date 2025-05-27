import type { Group } from "../data/groups";

export interface GroupSimilarity {
  name: string;
  similarity: number; // 0–100
}

export function getGroupSimilarities(
  userAnswers: number[],
  groups: Group[]
): GroupSimilarity[] {
  return groups
    .map((group) => {
      const distance = Math.sqrt(
        userAnswers.reduce((sum, answer, i) => {
          const diff = answer - group.vector[i];
          return sum + diff * diff;
        }, 0)
      );

      const maxDistance = Math.sqrt(userAnswers.length * 16); // max diff = 4 per question
      const similarity = Math.round(100 - (distance / maxDistance) * 100);

      return {
        name: group.name,
        similarity,
      };
    })
    .sort((a, b) => b.similarity - a.similarity);
}

