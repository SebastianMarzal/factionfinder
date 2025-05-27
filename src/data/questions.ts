export interface Question {
  id: number;
  text: string;
  options: string[]; // must be exactly 5 strings, one for each A–E
}

export const questions: Question[] = [
  {
    "id": 1,
    "text": "What are your views on Jews?",
    "options": [
      "Jews are an enemy of Western civilization, and they have intentionally played a major role in many of the world's worst crises.",
      "Jewish influence in media, politics, and finance has often been disproportionate and counterproductive to traditional Western values.",
      "Like any group, Jews have a diverse set of interests and views. Their influence in society is neither inherently good nor bad.",
      "Jews have contributed significantly to Western culture and intellectual life, and protecting their rights is important to a just society.",
      "Jews are a foundational part of the moral and cultural fabric of the West. Their leadership and well-being are essential to a thriving civilization."
    ]
  },
  {
    "id": 2,
    "text": "What are your views on non-Whites generally?",
    "options": [
      "They are irredeemable savages who cannot be trusted and do not belong in Western societies. Their hatred of Whites is biological.",
      "Cultural and civilizational differences between Whites and non-Whites are often too deep to reconcile. Multiracial societies are inherently unstable.",
      "Race is a real and important factor in social cohesion, but many non-Whites are loyal, admirable, and valuable citizens of Western nations.",
      "Multiracial societies can face serious challenges, but the benefits of diversity—especially when built on shared values—are worth it.",
      "They are not perfect—because no one is—but they have many positive qualities and are essential to the excellence and history of Western civilization."
    ]
  },
  {
    "id": 3,
    "text": "What are your views on economic protectionism?",
    "options": [
      "Tariffs and other measures are good because they help our country and hurt foreign nations that have taken advantage of us. Trade should be used as a weapon.",
      "Strategic protectionism is necessary to defend national industries and workers from global exploitation. We need to put our people first.",
      "Free trade has benefits and downsides. Some protections are necessary, but long-term prosperity requires openness and innovation.",
      "Trade liberalization leads to greater efficiency, cheaper goods, and stronger alliances. Protectionism causes stagnation.",
      "Free markets are foundational to national success. If our companies can’t beat foreign ones, the answer is more competition, not government shielding."
    ]
  },
  {
    "id": 4,
    "text": "What is the role of Christianity in the government?",
    "options": [
      "None. There should be complete separation of church and state. Blending the two endangers both spiritual life and governmental effectiveness.",
      "Government should be religiously neutral. Christian influence is fine culturally, but it should not guide policy or law.",
      "Christianity is part of our heritage and can inform values, but government must serve a pluralistic society.",
      "Christian principles—like natural law and moral order—should guide policymaking. We need leaders of faith.",
      "Christianity should be the official religion of the state. Government must reflect and enforce Christian truth."
    ]
  },
  {
    "id": 5,
    "text": "What are your views on LGBTQ?",
    "options": [
      "LGBTQ people deserve the same rights and dignity as anyone else. Their existence and relationships should be fully accepted in society.",
      "People should be free to live as LGBTQ without fear or shame, but we shouldn’t elevate it as a cultural ideal—especially for children.",
      "LGBTQ individuals should be treated with respect, but society must also respect those with traditional values. Coexistence, not dominance.",
      "LGBTQ identity should not be criminalized, but it’s morally wrong and should not be normalized or promoted in public life.",
      "LGBTQ is disordered and evil. No step is too far to stop its spread, punish its promotion, and remove it from public life."
    ]
  },
  {
    "id": 6,
    "text": "What are your views on Israel?",
    "options": [
      "Israel and its agents manipulate the U.S. government through financial and political coercion—often to America’s detriment and for their own benefit.",
      "U.S. support for Israel is excessive. While it’s a stable Middle Eastern partner, our relationship often undermines American interests and neutrality.",
      "Israel is an ally, but our relationship should be based on mutual benefit—not ideology, lobbying, or blind loyalty.",
      "Israel is a key ally that shares our democratic values. Supporting it helps secure U.S. interests in a hostile region.",
      "Israel is America’s greatest ally. Its survival and strength are fundamental to our global mission and moral purpose."
    ]
  },
  {
    "id": 7,
    "text": "What are your views on Russia, China, and Iran?",
    "options": [
      "They are empires of evil and global destabilization. They are our enemies and must be opposed at every turn, militarily and ideologically.",
      "These regimes are authoritarian and hostile. The U.S. must remain vigilant and contain their influence aggressively.",
      "They are geopolitical rivals with legitimate interests. We should approach them pragmatically, not ideologically.",
      "The demonization of these countries is often exaggerated. We can cooperate with them where interests align.",
      "They are unjustly maligned. We should end our hostility and let them govern themselves without U.S. interference."
    ]
  },
  {
    "id": 8,
    "text": "What are your views on women?",
    "options": [
      "Women are the better, complementary part of men. They belong in positions of power and influence, bringing essential perspectives.",
      "Women can lead, but the drive to place them in power for its own sake can be disruptive. Their natural strengths lie elsewhere.",
      "Men and women are different, but should be judged as individuals. Talent and merit, not gender, should decide roles.",
      "Women are not suited to leadership or public life in general. Society functions best when they focus on home and family.",
      "Women have no role in political or public life. The law should reflect their subordination to men and natural domestic duties."
    ]
  },
  {
    "id": 9,
    "text": "What are your views on abortion?",
    "options": [
      "Abortion is never permissible. It is murder, and the law should severely punish everyone involved, including the mother.",
      "Abortion should be banned in nearly all cases, with few exceptions. It’s a moral atrocity, but punishments should be limited.",
      "Abortion is morally serious, but legal bans don’t work. It should be discouraged but allowed with regulation.",
      "Abortion should be legal and accessible. It’s a private choice, and the government shouldn’t impose morality.",
      "Abortion is fine as long as it’s done reasonably. It’s not the government’s business—it’s a personal healthcare decision."
    ]
  },
  {
    "id": 10,
    "text": "What are your views on immigration?",
    "options": [
      "Nothing but mass deportations will do. The ultimate goal should be the removal of most, if not all, non-Whites from the country.",
      "Immigration, especially from non-Western countries, has weakened America. We need a full moratorium and should begin repatriating illegals.",
      "We need to drastically reduce immigration, enforce the law, and prioritize cultural assimilation—but some immigration is acceptable.",
      "Immigration is good when done legally and with vetting. The system should reward merit and support assimilation.",
      "Legal immigration is a net positive and should be expanded. Barriers should be reduced for hard-working people from anywhere in the world."
    ]
  },
  {
    "id": 11,
    "text": "What are your views on the role of men in society?",
    "options": [
      "There is nothing wrong with how men are treated in Western societies. Men simply need to step up, take responsibility, and do better.",
      "Men face some issues, like mental health and dropout rates, but most of the blame lies with men themselves—not society.",
      "Men face unique challenges today, and while society isn’t anti-male, we need to take their struggles seriously.",
      "Masculinity is under cultural attack. Society devalues men, and that needs to change if we want order and strength.",
      "Men of Western origin have been legally dispossessed and politically disenfranchised in their own countries. Any successful political project starts with restoring their power."
    ]
  },
  {
    "id": 12,
    "text": "What are your views on White identity?",
    "options": [
      "White identitarian movements are evil, rooted in hate, and have no place in decent society. No person of good conscience should ever associate with them.",
      "White identity movements are misguided and often dangerous, but they reflect real fears that need to be addressed constructively.",
      "Everyone has a right to identity. White people should be able to express pride in their heritage, but not in ways that attack others.",
      "White identity is important. It's time for White people to organize and assert their interests like every other group does.",
      "White identitarianism is the only viable solution to the problems that ail the Western world. Anything else is submission and decline."
    ]
  },
  {
    "id": 13,
    "text": "What are your views on democracy?",
    "options": [
      "Democracy is not viable in today’s world. It produces decadence and instability. Alternatives like monarchy or fascism are preferable.",
      "Democracy has failed in many respects. We need to rethink who votes and under what conditions, or it will destroy itself.",
      "Democracy has problems, but it’s better than the alternatives. It needs reform, not replacement.",
      "Democracy is a key part of Western identity. It needs defending, especially from authoritarian impulses.",
      "Democracy is sacred. It is essential to Western civilization and must be protected at all costs, both at home and abroad."
    ]
  },
  {
    "id": 14,
    "text": "What are your views on the Civil Rights Movement?",
    "options": [
      "The Civil Rights Movement and its laws began America’s decline. We must reverse its legacy and restore true national order.",
      "The Civil Rights Movement went too far. It eroded meritocracy, inflamed division, and damaged social trust.",
      "The CRM had noble intentions and some successes, but its legacy is complicated and has had unintended consequences.",
      "The CRM was a major step forward. We haven’t fully realized its goals, but it helped make the U.S. more just.",
      "The Civil Rights Movement is a golden chapter in our history. Its legacy is essential and its lessons remain urgent today."
    ]
  },
  {
    "id": 15,
    "text": "What are your views on foreign intervention / isolationism?",
    "options": [
      "America has a duty to be a global beacon of freedom. Intervention is often necessary and usually worth it.",
      "While restraint is good, the world needs American leadership. We can't ignore threats or abandon allies.",
      "We should avoid wars of choice, but maintain strength and intervene when vital interests are clearly at stake.",
      "Foreign intervention often backfires. America should focus on internal affairs and avoid unnecessary entanglements.",
      "America should stay out of all foreign conflicts—war, famine, or crisis. It is none of our business."
    ]
  },
  {
    "id": 16,
    "text": "What are your views on market regulation?",
    "options": [
      "American innovation should never be stifled. Free-market capitalism best serves social, economic, and environmental good.",
      "Markets are mostly self-correcting. Some regulation is okay, but we should be cautious about government overreach.",
      "Markets should be free but fair. Targeted regulation can protect the vulnerable and ensure long-term stability.",
      "Unregulated markets hurt regular people. We need stronger protections for workers, families, and the environment.",
      "The only purpose of the market is to serve Americans. If heavy regulation helps people, it should be imposed without hesitation."
    ]
  }
];

