export type Word = {
  en: string;
  tw: string;
};

export type Test = {
  word: Word;
  success: number;
  attempts: number;
  hasHint: boolean;
};
