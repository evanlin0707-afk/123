import { Question, PersonalityType } from './types';

export const QUESTIONS: Question[] = [
  // E vs I
  { id: 1, text: "You enjoy vibrant social events with lots of people.", dichotomy: 'EI', direction: -1 },
  { id: 2, text: "You prefer to spend your free time alone or in a small group.", dichotomy: 'EI', direction: 1 },
  { id: 3, text: "You feel energized after spending time with a large group of people.", dichotomy: 'EI', direction: -1 },
  { id: 4, text: "You often feel exhausted after social interactions.", dichotomy: 'EI', direction: 1 },
  { id: 5, text: "You usually wait for others to introduce themselves first.", dichotomy: 'EI', direction: 1 },

  // S vs N
  { id: 6, text: "You focus more on concrete facts than abstract theories.", dichotomy: 'SN', direction: -1 },
  { id: 7, text: "You are often lost in thought about future possibilities.", dichotomy: 'SN', direction: 1 },
  { id: 8, text: "You prefer practical, hands-on tasks over conceptual ones.", dichotomy: 'SN', direction: -1 },
  { id: 9, text: "You often look for deeper meanings in things.", dichotomy: 'SN', direction: 1 },
  { id: 10, text: "You rely more on your experience than your imagination.", dichotomy: 'SN', direction: -1 },

  // T vs F
  { id: 11, text: "You prioritize logic over emotions when making decisions.", dichotomy: 'TF', direction: -1 },
  { id: 12, text: "You are very sensitive to the feelings of others.", dichotomy: 'TF', direction: 1 },
  { id: 13, text: "You believe being efficient is more important than being liked.", dichotomy: 'TF', direction: -1 },
  { id: 14, text: "You often make decisions based on your gut feeling or values.", dichotomy: 'TF', direction: 1 },
  { id: 15, text: "You find it easy to remain objective even in emotional situations.", dichotomy: 'TF', direction: -1 },

  // J vs P
  { id: 16, text: "You like to have a detailed plan for your day.", dichotomy: 'JP', direction: -1 },
  { id: 17, text: "You prefer to keep your options open rather than making a final decision.", dichotomy: 'JP', direction: 1 },
  { id: 18, text: "You feel uncomfortable if your surroundings are messy or disorganized.", dichotomy: 'JP', direction: -1 },
  { id: 19, text: "You are spontaneous and often act on a whim.", dichotomy: 'JP', direction: 1 },
  { id: 20, text: "You meet deadlines easily and avoid last-minute rushes.", dichotomy: 'JP', direction: -1 },
];

export const PERSONALITY_TYPES: Record<string, PersonalityType> = {
  'INTJ': {
    type: 'INTJ',
    title: 'The Architect',
    description: 'Imaginative and strategic thinkers, with a plan for everything.',
    traits: ['Strategic', 'Independent', 'Analytical'],
    strengths: ['Rational', 'Informed', 'Determined'],
    weaknesses: ['Arrogant', 'Dismissive of emotions', 'Overly critical']
  },
  'INTP': {
    type: 'INTP',
    title: 'The Logician',
    description: 'Innovative inventors with an unquenchable thirst for knowledge.',
    traits: ['Philosophical', 'Objective', 'Imaginative'],
    strengths: ['Analytical', 'Open-minded', 'Enthusiastic'],
    weaknesses: ['Absent-minded', 'Condescending', 'Insensitive']
  },
  'ENTJ': {
    type: 'ENTJ',
    title: 'The Commander',
    description: 'Bold, imaginative and strong-willed leaders, always finding a way – or making one.',
    traits: ['Efficient', 'Strategic', 'Confident'],
    strengths: ['Strong-willed', 'Strategic', 'Charismatic'],
    weaknesses: ['Stubborn', 'Intolerant', 'Impatient']
  },
  'ENTP': {
    type: 'ENTP',
    title: 'The Debater',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    traits: ['Knowledgeable', 'Quick-witted', 'Original'],
    strengths: ['Energetic', 'Innovative', 'Excellent brainstormers'],
    weaknesses: ['Argumentative', 'Insensitive', 'Intolerant']
  },
  'INFJ': {
    type: 'INFJ',
    title: 'The Advocate',
    description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
    traits: ['Insightful', 'Principled', 'Passionate'],
    strengths: ['Creative', 'Insightful', 'Altruistic'],
    weaknesses: ['Sensitive to criticism', 'Perfectionistic', 'Avoids conflict']
  },
  'INFP': {
    type: 'INFP',
    title: 'The Mediator',
    description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
    traits: ['Empathetic', 'Idealistic', 'Creative'],
    strengths: ['Generous', 'Open-minded', 'Passionate'],
    weaknesses: ['Unrealistic', 'Self-critical', 'Vulnerable']
  },
  'ENFJ': {
    type: 'ENFJ',
    title: 'The Protagonist',
    description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
    traits: ['Reliable', 'Altruistic', 'Charismatic'],
    strengths: ['Tolerant', 'Reliable', 'Natural leaders'],
    weaknesses: ['Overly idealistic', 'Too sensitive', 'Fluctuating self-esteem']
  },
  'ENFP': {
    type: 'ENFP',
    title: 'The Campaigner',
    description: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
    traits: ['Enthusiastic', 'Creative', 'Sociable'],
    strengths: ['Curious', 'Observant', 'Energetic'],
    weaknesses: ['People-pleasers', 'Unfocused', 'Overthinkers']
  },
  'ISTJ': {
    type: 'ISTJ',
    title: 'The Logistician',
    description: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
    traits: ['Responsible', 'Calm', 'Practical'],
    strengths: ['Honest', 'Strong-willed', 'Dutiful'],
    weaknesses: ['Stubborn', 'Insensitive', 'Judgmental']
  },
  'ISFJ': {
    type: 'ISFJ',
    title: 'The Defender',
    description: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
    traits: ['Supportive', 'Reliable', 'Observant'],
    strengths: ['Supportive', 'Patient', 'Practical'],
    weaknesses: ['Humble and shy', 'Takes things personally', 'Overburdened']
  },
  'ESTJ': {
    type: 'ESTJ',
    title: 'The Executive',
    description: 'Excellent administrators, unsurpassed at managing things – or people.',
    traits: ['Organized', 'Direct', 'Dutiful'],
    strengths: ['Dedicated', 'Strong-willed', 'Direct'],
    weaknesses: ['Inflexible', 'Judgmental', 'Focuses too much on social status']
  },
  'ESFJ': {
    type: 'ESFJ',
    title: 'The Consul',
    description: 'Extraordinarily caring, social and popular people, always eager to help.',
    traits: ['Social', 'Loyal', 'Warm'],
    strengths: ['Strong practical skills', 'Sense of duty', 'Sensitive and warm'],
    weaknesses: ['Needy', 'Inflexible', 'Vulnerable to criticism']
  },
  'ISTP': {
    type: 'ISTP',
    title: 'The Virtuoso',
    description: 'Bold and practical experimenters, masters of all kinds of tools.',
    traits: ['Practical', 'Spontaneous', 'Independent'],
    strengths: ['Optimistic', 'Creative', 'Practical'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private and reserved']
  },
  'ISFP': {
    type: 'ISFP',
    title: 'The Adventurer',
    description: 'Flexible and charming artists, always ready to explore and experience something new.',
    traits: ['Charming', 'Sensitive', 'Imaginative'],
    strengths: ['Charming', 'Sensitive', 'Artistic'],
    weaknesses: ['Fierce independence', 'Unpredictable', 'Easily stressed']
  },
  'ESTP': {
    type: 'ESTP',
    title: 'The Entrepreneur',
    description: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
    traits: ['Bold', 'Rational', 'Sociable'],
    strengths: ['Bold', 'Direct', 'Sociable'],
    weaknesses: ['Insensitive', 'Impatient', 'Risk-prone']
  },
  'ESFP': {
    type: 'ESFP',
    title: 'The Entertainer',
    description: 'Spontaneous, energetic and enthusiastic people – life is never boring around them.',
    traits: ['Bold', 'Original', 'Practical'],
    strengths: ['Bold', 'Original', 'Practical'],
    weaknesses: ['Sensitive', 'Poor long-term planners', 'Unfocused']
  }
};
