export interface Group {
  name: string;
  vector: number[];
  image: string;
  description: string;
  leaders: string[];
  sources: string[];
  positions: {
    immigration: string;
    race: string;
    gender: string;
    religion: string;
    economy: string;
    foreign: string;
  };
}

export const groups: Group[] = [
  {
    name: "Traditional conservatives",
    vector: [1, 0, -2, 1, -1, 2, -2, 0, -1, 1, 0, -1, 2, 2, -1, -2],
    image: "/images/group-a.jpg",
    description: "TradCons emphasize law, order, religious values, and American institutions. They believe in civic nationalism, limited immigration, and the defense of traditional social norms within a constitutional framework.",
    leaders: ["Ben Shapiro", "Nikki Haley"],
    sources: ["The Daily Wire", "National Review", "Heritage Foundation"],
    positions: {
      immigration: "Strong borders, legal immigration favored, oppose amnesty.",
      race: "Race-neutral law, oppose CRT, promote meritocracy.",
      gender: "Support traditional gender roles but oppose explicit discrimination.",
      religion: "Support Christian moral framing, oppose full theocracy.",
      economy: "Free markets with some regulation, pro-business.",
      foreign: "Pro-Israel, hawkish toward adversaries like Iran and China."
    }
  },
  {
    name: "Trumpists",
    vector: [1, 0, 1, 1, 0, 1, -1, 1, -1, -1, 1, 0, 0, 1, 1, 0],
    image: "/images/group-b.jpg",
    description: "Trumpists are populist-nationalists focused on American sovereignty, immigration restriction, and economic nationalism. They mix cultural grievance politics with loyalty to Trump-style personalism.",
    leaders: ["Donald Trump", "Tucker Carlson"],
    sources: ["War Room", "Truth Social", "Breitbart"],
    positions: {
      immigration: "Build the wall, mass deportations, restrict legal immigration.",
      race: "Racially coded nationalism, avoid explicit identity claims.",
      gender: "Support traditional family but with populist flexibility.",
      religion: "Cultural Christianity, anti-secularist, not fully theocratic.",
      economy: "Protectionism, tariffs, support working-class interests.",
      foreign: "America First: skeptical of NATO, skeptical of Ukraine aid."
    }
  },
  {
    name: "Religious conservatives",
    vector: [2, 1, -1, 2, 0, 2, -2, 1, -2, 0, 0, -2, 1, 2, -2, -1],
    image: "/images/group-c.jpg",
    description: "Religious neocons promote a fusion of American exceptionalism and Judeo-Christian values. They support liberal democracy abroad, free markets, and robust pro-life policy at home.",
    leaders: ["Russell Moore", "David French"],
    sources: ["The Dispatch", "First Things", "Christianity Today"],
    positions: {
      immigration: "Compassionate conservatism—borders with amnesty.",
      race: "Racial reconciliation through Christianity, against identity politics.",
      gender: "Complementarianism; women can lead but within moral frameworks.",
      religion: "Christian ethics as the moral foundation of the republic.",
      economy: "Pro-capitalist but favor social safety nets.",
      foreign: "Pro-Israel, pro-democracy interventionism."
    }
  },
  {
    name: "Groypers",
    vector: [-2, -1, 2, 1, 2, -2, 1, -2, -2, -1, 2, 1, -1, -1, 2, 1],
    image: "/images/group-a.jpg",
    description: "Groypers are white identitarians who use irony, memes, and plausible deniability to push antisemitic, anti-democratic, and anti-LGBTQ ideas. They seek to capture and subvert mainstream conservatism.",
    leaders: ["Nick Fuentes"],
    sources: ["Cozy.tv", "America First", "Telegram"],
    positions: {
      immigration: "Mass deportations, white ethnostate vision.",
      race: "White racial identity is central to political legitimacy.",
      gender: "Return to patriarchy, no women in politics.",
      religion: "State-enforced Catholicism or Christian nationalism.",
      economy: "Corporatist or reactionary protectionism.",
      foreign: "Anti-Israel, pro-Russia, isolationist."
    }
  },
  {
    name: "New Right",
    vector: [1, -2, 0, 0, 1, 1, -1, -1, 0, -2, 2, 2, -2, -2, 0, -1],
    image: "/images/group-b.jpg",
    description: "The New Right is an aesthetic, Nietzschean movement that critiques liberalism, egalitarianism, and modernity. It promotes hierarchy, masculinity, and Western civilizational dominance.",
    leaders: ["Curtis Yarvin", "Bronze Age Pervert"],
    sources: ["Bronze Age Mindset", "Man's World", "Substack/Twitter networks"],
    positions: {
      immigration: "Against multiculturalism, prefer Western ethno-compatibility.",
      race: "Elitist, anti-egalitarian, avoid overt racism but promote hierarchy.",
      gender: "Hyper-masculine, skeptical of female leadership.",
      religion: "Pagan-tinged Nietzscheanism or ironic Christianity.",
      economy: "Nationalistic, indifferent to capitalism; elite rule over markets.",
      foreign: "Admire strength: Russia > NATO, prefer multipolar world."
    }
  },
  {
    name: "Catholic post-liberals",
    vector: [0, 1, 1, 2, 1, 0, -1, 1, -2, 1, 0, -2, -1, 1, 1, 2],
    image: "/images/group-c.jpg",
    description: "Post-liberals reject classical liberalism in favor of the common good, solidarity, and integralist Catholic governance. They want a morally ordered society rooted in Christian truth and the family.",
    leaders: ["Sohrab Ahmari", "Adrian Vermeule", "Patrick Deneen"],
    sources: ["Compact Magazine", "The Josias", "First Things"],
    positions: {
      immigration: "Skeptical of mass immigration, favor national cohesion.",
      race: "Focus on spiritual unity, reject both racism and CRT.",
      gender: "Men lead, women nurture; formal roles may differ by theology.",
      religion: "Catholic moral law should guide governance, even by force.",
      economy: "Distributist, pro-labor, regulation in service of the family.",
      foreign: "Dislike neocon wars; prefer stability, especially for Christians."
    }
  }
];