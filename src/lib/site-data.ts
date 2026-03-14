export type CharacterProfile = {
  name: string;
  whoTheyAre: string;
  roleInPlot: string;
  represents: string;
  keyQuote: string;
  themeConnection: string;
};

export type SymbolProfile = {
  name: string;
  literal: string;
  meaning: string;
  themeDevelopment: string;
  quote: string;
};

export type ThemeProfile = {
  title: string;
  explanation: string;
  examples: string;
  quoteOrMoment: string;
};

export type SceneProfile = {
  title: string;
  summary: string;
  whyItMatters: string;
  themesAndSymbols: string;
  characterReveals: string;
};

export type QuoteProfile = {
  text: string;
  speaker: string;
  chapter: string;
  analysis: string;
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/characters", label: "Characters" },
  { href: "/symbols", label: "Symbols" },
  { href: "/themes", label: "Themes" },
  { href: "/scenes", label: "Important Scenes" },
  { href: "/quotes", label: "Quotes" },
  { href: "/reflection", label: "Final Reflection" },
];

export const homeIntro = {
  title: "The Great Gatsby",
  subtitle: "A Literary Analysis Experience",
  author: "F. Scott Fitzgerald",
  setting:
    "Long Island and New York City during the Jazz Age of the 1920s, where glittering wealth conceals moral collapse.",
  summary:
    "The novel follows Nick Carraway as he enters a world of extravagant parties, social rivalry, and emotional ruin. Through Jay Gatsby's pursuit of Daisy Buchanan, Fitzgerald explores the American Dream, class divisions, and the danger of living for an idealized past.",
  purpose:
    "This website highlights the characters, themes, symbols, major scenes, and quotes that reveal the novel's deeper claims about ambition, illusion, morality, and consequence.",
};

export const characters: CharacterProfile[] = [
  {
    name: "Jay Gatsby",
    whoTheyAre:
      "Born James Gatz, Gatsby is a wealthy and mysterious man living in a mansion in West Egg. His fortune is tied to questionable business activity.",
    roleInPlot:
      "He hosts elaborate parties hoping Daisy will appear, reunites with her through Nick, and ultimately dies after being blamed for Myrtle's death.",
    represents:
      "Gatsby represents both the promise and futility of the American Dream. He can build wealth, but he cannot cross old-money social boundaries.",
    keyQuote: "\"Can't repeat the past? Why of course you can!\"",
    themeConnection:
      "His story directly connects to the American Dream, class inequality, and the impossibility of recreating an imagined past.",
  },
  {
    name: "Daisy Buchanan",
    whoTheyAre:
      "Daisy is Tom Buchanan's wife and Gatsby's former lover. She comes from inherited wealth and lives in East Egg.",
    roleInPlot:
      "She rekindles her relationship with Gatsby but retreats to the safety of Tom's social status after the Plaza confrontation and Myrtle's death.",
    represents:
      "Daisy represents beauty, privilege, and moral carelessness. She causes destruction but avoids responsibility.",
    keyQuote:
      "\"Oh, you want too much! ... I did love him once - but I loved you too.\"",
    themeConnection:
      "She reflects class division and the reckless immunity of the wealthy who can leave ruin behind and move on.",
  },
  {
    name: "Nick Carraway",
    whoTheyAre:
      "Nick is the narrator, Gatsby's neighbor in West Egg, Daisy's cousin, and for a time Jordan Baker's romantic interest.",
    roleInPlot:
      "He arranges Gatsby and Daisy's reunion, observes key events, and delivers the moral lens through which the novel is interpreted.",
    represents:
      "Nick represents observation, moral reflection, and the possibility of honesty in a society driven by image and status.",
    keyQuote:
      "\"They're a rotten crowd... You're worth the whole damn bunch put together.\"",
    themeConnection:
      "His shifting judgment exposes the novel's focus on morality, responsibility, and the collapse of idealized views of the East.",
  },
  {
    name: "Tom Buchanan",
    whoTheyAre:
      "Tom is Daisy's husband, wealthy through inherited status, and openly arrogant, controlling, and violent.",
    roleInPlot:
      "He exposes Gatsby's criminal ties, manipulates George Wilson after Myrtle's death, and helps trigger Gatsby's murder.",
    represents:
      "Tom symbolizes old-money entitlement, racism, misogyny, and the confidence of people who expect to escape consequences.",
    keyQuote:
      "\"Civilization's going to pieces... It's all scientific stuff; it's been proved.\"",
    themeConnection:
      "He embodies class power and moral corruption, proving that status often protects the guilty.",
  },
  {
    name: "Jordan Baker",
    whoTheyAre:
      "Jordan is Daisy's friend and a professional golfer. She appears poised and modern but is often dishonest.",
    roleInPlot:
      "She connects Nick to Gatsby's history with Daisy and helps facilitate Gatsby and Daisy's reunion.",
    represents:
      "Jordan represents carelessness and dishonesty beneath polished social charm.",
    keyQuote: "\"It takes two to make an accident.\"",
    themeConnection:
      "Her attitudes reinforce recurring themes of dishonesty, emotional detachment, and social irresponsibility.",
  },
  {
    name: "Myrtle Wilson",
    whoTheyAre:
      "Myrtle is George Wilson's wife in the Valley of Ashes and Tom Buchanan's mistress.",
    roleInPlot:
      "Her desire for an upper-class life fuels the affair with Tom, and her death becomes the turning point leading to Gatsby's murder.",
    represents:
      "Myrtle symbolizes the painful desire to escape poverty and the false promise that wealth guarantees transformation.",
    keyQuote:
      "\"I married him because I thought he was a gentleman... he wasn't fit to lick my shoe.\"",
    themeConnection:
      "Her tragedy exposes class inequality and the cost paid by people with the least power.",
  },
  {
    name: "George Wilson",
    whoTheyAre:
      "George owns a garage in the Valley of Ashes and struggles financially while trapped in a collapsing marriage.",
    roleInPlot:
      "After Myrtle's death, Tom misleads him into believing Gatsby was responsible, leading George to kill Gatsby and then himself.",
    represents:
      "George represents the suffering of the working class and the destructive fallout of upper-class recklessness.",
    keyQuote: "\"God sees everything.\"",
    themeConnection:
      "His ending reveals how social inequality and manipulation can direct violence downward while privilege remains protected.",
  },
];

export const symbols: SymbolProfile[] = [
  {
    name: "The Green Light",
    literal: "A green dock light across the bay at Daisy's house, visible from Gatsby's mansion.",
    meaning:
      "It symbolizes Gatsby's hope for Daisy and, more broadly, the American Dream as a goal that keeps receding.",
    themeDevelopment:
      "Fitzgerald uses the light as a distant promise to show how people chase ideal futures that may only be illusions.",
    quote:
      "\"Gatsby believed in the green light, the orgastic future that year by year recedes before us.\"",
  },
  {
    name: "Dr. T. J. Eckleburg's Eyes",
    literal: "A faded billboard with giant eyes overlooking the Valley of Ashes.",
    meaning:
      "The eyes suggest judgment and surveillance in a world where moral accountability is mostly absent.",
    themeDevelopment:
      "Fitzgerald places the billboard above scenes of decay to stress the spiritual emptiness beneath material success.",
    quote: "\"God sees everything.\"",
  },
  {
    name: "Color Imagery",
    literal:
      "Recurring colors include green, yellow/gold, white, and gray throughout the novel's settings and descriptions.",
    meaning:
      "Green suggests hope, yellow and gold suggest corruption and performance, white suggests false purity, and gray suggests moral decay.",
    themeDevelopment:
      "Color helps Fitzgerald contrast appearance versus reality and dramatize the collapse of dream into disillusionment.",
    quote:
      "\"They were both in white, and their dresses were rippling and fluttering...\"",
  },
  {
    name: "East Egg vs West Egg",
    literal:
      "Two neighboring areas of Long Island: East Egg (old money) and West Egg (new money).",
    meaning:
      "The geography becomes a social map of class, privilege, and exclusion.",
    themeDevelopment:
      "Fitzgerald uses the divide to show that wealth alone does not erase hierarchy; background and status still control belonging.",
    quote: "\"I lived at West Egg, the less fashionable of the two.\"",
  },
  {
    name: "Clothing and Shirts",
    literal:
      "Luxury clothing appears repeatedly in scenes of display, seduction, and social performance.",
    meaning:
      "Clothing symbolizes materialism and the longing to be admired or accepted by elite society.",
    themeDevelopment:
      "Objects become emotional substitutes, revealing how shallow symbols of wealth can stand in for real connection.",
    quote:
      "\"They're such beautiful shirts... It makes me sad because I've never seen such beautiful shirts before.\"",
  },
  {
    name: "Gatsby's House",
    literal: "A lavish mansion in West Egg with huge parties and theatrical decor.",
    meaning:
      "The mansion represents Gatsby's constructed identity, his ambition, and the emptiness beneath spectacle.",
    themeDevelopment:
      "Its shift from crowded glamour to silence after Gatsby's death illustrates how quickly performative wealth dissolves.",
    quote:
      "\"A factual imitation of some Hotel de Ville in Normandy...\"",
  },
];

export const themes: ThemeProfile[] = [
  {
    title: "The American Dream",
    explanation:
      "The novel questions the idea that anyone can fully reinvent themselves through ambition and money.",
    examples:
      "Gatsby builds enormous wealth, yet cannot recover Daisy or gain true acceptance from old-money elites.",
    quoteOrMoment:
      "Gatsby's rise proves economic mobility is possible, but his ending reveals the social limits of that dream.",
  },
  {
    title: "Illusion vs Reality",
    explanation:
      "Characters cling to stories they want to believe, even when evidence points elsewhere.",
    examples:
      "Gatsby idealizes Daisy; George believes Tom's lie about Myrtle's death; appearances repeatedly overpower truth.",
    quoteOrMoment:
      "The novel's glamour masks emotional emptiness, corruption, and violence.",
  },
  {
    title: "Wealth and Class",
    explanation:
      "Money in Gatsby is not equal; inherited status and social pedigree matter as much as wealth itself.",
    examples:
      "East Egg and West Egg represent entrenched social hierarchy, while the Valley of Ashes reflects those excluded from privilege.",
    quoteOrMoment:
      "Tom and Daisy cause damage then disappear, protected by class power.",
  },
  {
    title: "Carelessness",
    explanation:
      "Moral responsibility fades as privilege increases, and harm is treated as disposable.",
    examples:
      "Daisy kills Myrtle and leaves; Tom manipulates George; Jordan normalizes risky behavior.",
    quoteOrMoment:
      "Nick's judgment of the Buchanans captures the theme: they smash things and retreat into wealth.",
  },
  {
    title: "The Past",
    explanation:
      "The novel argues that the past cannot be perfectly restored, no matter how intensely one desires it.",
    examples:
      "Gatsby's insistence that Daisy erase her history with Tom reveals his inability to accept time and change.",
    quoteOrMoment:
      "His fixation on repetition becomes the engine of his tragic downfall.",
  },
];

export const scenes: SceneProfile[] = [
  {
    title: "Gatsby and Daisy's Reunion",
    summary:
      "At Nick's house, Gatsby and Daisy meet for the first time in years. The scene starts with awkward silence but shifts into emotional connection.",
    whyItMatters:
      "It reactivates Gatsby's dream and marks the moment desire turns back into action.",
    themesAndSymbols:
      "Past vs present, illusion, and the performance of wealth all emerge in this carefully staged meeting.",
    characterReveals:
      "Gatsby appears vulnerable beneath his polished image, while Daisy's uncertainty foreshadows instability.",
  },
  {
    title: "Plaza Hotel Confrontation",
    summary:
      "On a brutally hot day, Tom confronts Gatsby in New York, exposes his criminal dealings, and forces Daisy to choose.",
    whyItMatters:
      "This is the narrative climax where fantasy collides with social reality.",
    themesAndSymbols:
      "Class power, masculine rivalry, and the collapse of Gatsby's ideal all surface in one high-pressure scene.",
    characterReveals:
      "Tom weaponizes status, Gatsby overreaches, and Daisy retreats toward security rather than romance.",
  },
  {
    title: "Gatsby's Death and Funeral",
    summary:
      "After Myrtle's death, George Wilson kills Gatsby and then himself. Gatsby's funeral is attended by very few people.",
    whyItMatters:
      "The ending strips away social spectacle and exposes the emptiness of Gatsby's public world.",
    themesAndSymbols:
      "Carelessness, class immunity, and moral decay culminate in this final sequence.",
    characterReveals:
      "Nick's loyalty contrasts sharply with the indifference of those who used Gatsby when he was alive.",
  },
];

export const quotes: QuoteProfile[] = [
  {
    text:
      "\"Whenever you feel like criticizing any one, just remember that all the people in this world haven't had the advantages that you've had.\"",
    speaker: "Nick's father (recalled by Nick)",
    chapter: "Chapter 1",
    analysis:
      "This opening principle frames Nick as reflective and cautious, while setting up the moral lens he later revises after witnessing elite carelessness.",
  },
  {
    text: "\"I am one of the few honest people that I have ever known.\"",
    speaker: "Nick Carraway",
    chapter: "Chapter 3",
    analysis:
      "Nick's claim invites readers to question reliability and self-awareness, especially as his judgments become stronger over time.",
  },
  {
    text:
      "\"I thought so; I told Daisy I thought so. It's better that the shock should all come at once. She stood it pretty well.\"",
    speaker: "Jay Gatsby",
    chapter: "Chapter 7",
    analysis:
      "Gatsby focuses on Daisy while minimizing the moral gravity of Myrtle's death, revealing the intensity and danger of his obsession.",
  },
  {
    text:
      "\"They're a rotten crowd... You're worth the whole damn bunch put together.\"",
    speaker: "Nick Carraway",
    chapter: "Chapter 8",
    analysis:
      "Nick's final praise of Gatsby is also a condemnation of the social world around them: wealth without conscience.",
  },
  {
    text: "\"So we beat on, boats against the current, borne back ceaselessly into the past.\"",
    speaker: "Nick Carraway",
    chapter: "Chapter 9",
    analysis:
      "The closing line universalizes Gatsby's struggle, presenting human aspiration as both noble and tragically constrained by time.",
  },
];

export const timeline = [
  {
    event: "Nick arrives in West Egg",
    detail: "Nick moves East and rents a small home beside Gatsby's mansion.",
  },
  {
    event: "Gatsby's parties begin",
    detail: "Lavish gatherings fill Gatsby's house as he waits for Daisy to appear.",
  },
  {
    event: "Gatsby and Daisy reunite",
    detail: "Nick arranges a meeting that rekindles old emotions and old illusions.",
  },
  {
    event: "Confrontation in New York",
    detail: "Tom exposes Gatsby and Daisy cannot fully abandon her life with Tom.",
  },
  {
    event: "Myrtle is killed",
    detail: "Daisy, driving Gatsby's car, strikes Myrtle outside Wilson's garage.",
  },
  {
    event: "Gatsby and George die",
    detail: "George shoots Gatsby, then himself, after being misled by Tom.",
  },
  {
    event: "Sparse funeral",
    detail: "Only a few people attend, proving Gatsby's social world was mostly performance.",
  },
  {
    event: "Nick leaves the East",
    detail: "Disgusted by the moral emptiness he witnessed, Nick returns home.",
  },
];

export const reflection = [
  "This project treats The Great Gatsby as more than a story about parties and romance. It presents the novel as a critique of social hierarchy, moral emptiness, and the dangerous gap between dream and reality.",
  "By organizing characters, symbols, scenes, and quotes side by side, the site shows how Fitzgerald builds one argument through many layers: appearance can glitter while values collapse underneath.",
  "The final message is the one Nick learns too late: wealth and status do not guarantee integrity, and the past cannot be rebuilt by force of desire.",
];
