export interface Group {
  name: string;
  vector: number[];
}

export const groups: Group[] = [
  { name: "Traditional conservatives", vector: [1, 0, -2, 1, -1, 2, -2, 0, -1, 1, 0, -1, 2, 2, -1, -2] },
  { name: "Trumpists", vector: [1, 0, 1, 1, 0, 1, -1, 1, -1, -1, 1, 0, 0, 1, 1, 0] },
  { name: "Religious conservatives", vector: [2, 1, -1, 2, 0, 2, -2, 1, -2, 0, 0, -2, 1, 2, -2, -1] },
  { name: "Groypers", vector: [-2, -1, 2, 1, 2, -2, 1, -2, -2, -1, 2, 1, -1, -1, 2, 1] },
  { name: "New Right", vector: [1, -2, 0, 0, 1, 1, -1, -1, 0, -2, 2, 2, -2, -2, 0, -1] },
  { name: "Catholic post-liberals", vector: [0, 1, 1, 2, 1, 0, -1, 1, -2, 1, 0, -2, -1, 1, 1, 2] },
];

