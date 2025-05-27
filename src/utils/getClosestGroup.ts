import type { Group } from "../data/groups";

export function getClosestGroup(userAnswers: number[], groups: Group[]): Group {
  let closestGroup = groups[0];
  let smallestDistance = Infinity;

  for (const group of groups) {
    const distance = Math.sqrt(
      userAnswers.reduce((sum, answer, i) => {
        const diff = answer - group.vector[i];
        return sum + diff * diff;
      }, 0)
    );

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closestGroup = group;
    }
  }

  return closestGroup;
}

