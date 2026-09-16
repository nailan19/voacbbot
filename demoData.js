// Sample word entries used when no ANTHROPIC_API_KEY is configured, so the
// app can be tried out without live Claude access. Keys are lowercase words.
export const demoData = {
  bank: {
    word: "bank",
    meanings: [
      {
        partOfSpeech: "noun",
        definition:
          "A financial institution that keeps people's money safe and offers services like loans and accounts.",
        collocations: [
          "open a bank account",
          "bank loan",
          "bank statement",
          "savings bank",
          "bank transfer",
        ],
        examples: [
          "After she started her new job, she decided to open a bank account so her salary could be deposited directly each month.",
          "The small business owner visited the bank to apply for a loan that would help her expand the shop before the holidays.",
          "He checked his bank statement online and noticed a strange transaction that he did not remember making last week.",
        ],
      },
      {
        partOfSpeech: "noun",
        definition: "The raised ground along the edge of a river or lake.",
        collocations: ["river bank", "grassy bank", "along the bank", "sit on the bank"],
        examples: [
          "The children spent the afternoon fishing quietly along the river bank while their parents set up a picnic nearby.",
          "A family of ducks waddled up the grassy bank and disappeared into the tall reeds near the water.",
        ],
      },
    ],
  },
  light: {
    word: "light",
    meanings: [
      {
        partOfSpeech: "noun",
        definition:
          "The natural energy from the sun or an artificial source that allows people to see things.",
        collocations: ["turn on the light", "bright light", "natural light", "light bulb", "ray of light"],
        examples: [
          "She turned on the light in the kitchen because it was already getting dark outside by six o'clock.",
          "Sunlight streamed through the open window, filling the small room with warm natural light every morning.",
          "The old light bulb flickered several times before finally burning out completely during the storm last night.",
        ],
      },
      {
        partOfSpeech: "adjective",
        definition: "Not heavy; weighing very little.",
        collocations: ["light backpack", "travel light", "light fabric", "feel light"],
        examples: [
          "She packed a light backpack for the weekend trip so she would not get tired while hiking up the mountain.",
          "The summer dress was made of a light fabric that felt cool and comfortable even in the hot afternoon sun.",
          "He always tries to travel light, bringing only a small bag whenever he goes on a business trip abroad.",
        ],
      },
    ],
  },
  run: {
    word: "run",
    meanings: [
      {
        partOfSpeech: "verb",
        definition: "To move quickly on foot, faster than walking.",
        collocations: ["run a marathon", "run late", "run errands", "run for the bus"],
        examples: [
          "Every morning before work, she runs three miles around the park to stay healthy and clear her mind.",
          "He had to run for the bus because he woke up later than usual and almost missed his train.",
          "The children ran across the field, laughing loudly as they chased each other under the bright afternoon sun.",
        ],
      },
      {
        partOfSpeech: "verb",
        definition: "To manage or be in charge of a business, organization, or event.",
        collocations: ["run a company", "run a household", "run smoothly", "run for office"],
        examples: [
          "Her parents have run a small family restaurant in the neighborhood for more than twenty years now.",
          "The new manager runs the department efficiently, making sure every project stays on schedule and within budget.",
          "He decided to run for office after years of volunteering for local community projects in his hometown.",
        ],
      },
    ],
  },
  resilient: {
    word: "resilient",
    meanings: [
      {
        partOfSpeech: "adjective",
        definition: "Able to recover quickly from difficulties, damage, or change.",
        collocations: ["remain resilient", "resilient economy", "emotionally resilient", "resilient community"],
        examples: [
          "Despite losing his job during the recession, he remained resilient and eventually built an even more successful career.",
          "The small coastal town proved remarkably resilient, rebuilding its harbor within a year after the devastating storm.",
          "Children who grow up with supportive families often become more emotionally resilient when they face challenges later in life.",
        ],
      },
    ],
  },
  address: {
    word: "address",
    meanings: [
      {
        partOfSpeech: "noun",
        definition: "The details of the place where someone lives or where an organization is located.",
        collocations: ["home address", "change of address", "mailing address", "permanent address"],
        examples: [
          "Please remember to update your home address with the bank whenever you move to a new apartment.",
          "She wrote her mailing address carefully on the envelope so the package would not get lost in transit.",
          "The company asked all employees to confirm their permanent address for the annual tax documents this year.",
        ],
      },
      {
        partOfSpeech: "verb",
        definition: "To speak to a person or group, or to deal with a problem.",
        collocations: ["address the audience", "address a concern", "address an issue", "publicly address"],
        examples: [
          "The principal stood up to address the entire school about the upcoming changes to the exam schedule.",
          "Managers should address employee concerns directly instead of ignoring them until they become bigger problems.",
          "The mayor promised to address the growing traffic issue by investing in a new public transportation system.",
        ],
      },
    ],
  },
  novel: {
    word: "novel",
    meanings: [
      {
        partOfSpeech: "noun",
        definition: "A long written story about imaginary characters and events, published as a book.",
        collocations: ["write a novel", "bestselling novel", "read a novel", "historical novel"],
        examples: [
          "She spent almost five years writing her first novel before it was finally accepted by a publisher.",
          "His latest historical novel follows a young soldier's journey through the chaos of the Second World War.",
          "I usually read a novel before bed because it helps me relax after a long day at work.",
        ],
      },
      {
        partOfSpeech: "adjective",
        definition: "New, original, and different from anything known before.",
        collocations: ["novel approach", "novel idea", "truly novel", "novel solution"],
        examples: [
          "The engineers proposed a novel approach to reducing traffic congestion that no other city had tried before.",
          "Her novel idea for recycling plastic waste impressed the judges at the international science competition.",
          "Researchers are constantly searching for novel solutions to problems that traditional medicine has struggled to solve.",
        ],
      },
    ],
  },
  sharp: {
    word: "sharp",
    meanings: [
      {
        partOfSpeech: "adjective",
        definition: "Having a thin edge or point that can cut or pierce easily.",
        collocations: ["sharp knife", "sharp edge", "razor sharp", "sharp pencil"],
        examples: [
          "Be careful when you chop vegetables with that knife because the blade is extremely sharp.",
          "The broken glass left a sharp edge along the window frame that could easily cut someone's hand.",
          "She sharpened her pencil until the point was fine and sharp enough for detailed drawing.",
        ],
      },
      {
        partOfSpeech: "adjective",
        definition: "Quick to notice, understand, or think; mentally alert.",
        collocations: ["sharp mind", "sharp memory", "sharp eye for detail", "sharp increase"],
        examples: [
          "Even in her nineties, my grandmother still has a remarkably sharp mind and remembers every family birthday.",
          "The detective was known for his sharp eye for detail, noticing clues that everyone else had missed.",
          "Investors were surprised by the sharp increase in the company's profits during the last financial quarter.",
        ],
      },
    ],
  },
  fine: {
    word: "fine",
    meanings: [
      {
        partOfSpeech: "adjective",
        definition: "Of very high quality; excellent or delicate.",
        collocations: ["fine wine", "fine dining", "fine details", "fine craftsmanship"],
        examples: [
          "The restaurant is famous for its fine dining experience, with dishes prepared by an award-winning chef.",
          "The tailor paid close attention to the fine details of the suit, from the stitching to the buttons.",
          "They celebrated their anniversary with a bottle of fine wine they had been saving for years.",
        ],
      },
      {
        partOfSpeech: "noun",
        definition: "A sum of money that someone must pay as a punishment for breaking a rule or law.",
        collocations: ["pay a fine", "parking fine", "impose a fine", "avoid a fine"],
        examples: [
          "He had to pay a fine after the police caught him driving faster than the posted speed limit.",
          "The city imposed a heavy fine on the factory for repeatedly polluting the nearby river.",
          "Make sure you return the library books on time, or you will have to pay a small fine.",
        ],
      },
    ],
  },
};
