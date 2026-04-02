export type Dichotomy = 'EI' | 'SN' | 'TF' | 'JP';

export interface Question {
  id: number;
  text: string;
  dichotomy: Dichotomy;
  direction: 1 | -1; // 1 means 'Agree' leans towards the second letter (I, N, F, P), -1 means 'Agree' leans towards the first (E, S, T, J)
}

export interface PersonalityType {
  type: string;
  title: string;
  description: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
}
