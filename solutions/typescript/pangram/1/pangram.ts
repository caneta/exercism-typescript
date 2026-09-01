export function isPangram(sentence: string): boolean {
  if (sentence === "") return false;

  // Set to eliminate duplicated letters
  return new Set(sentence.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
}
