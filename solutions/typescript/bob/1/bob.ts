export function hey(message: string): string {
  const bobAnswers: string[] = [
    "Whatever.",
    "Whoa, chill out!",
    "Sure.",
    "Calm down, I know what I'm doing!",
    "Fine. Be that way!",
  ];

  // toLowerCase() is used to exclude false positives on messages with only number or punctuation
  const isYelling: boolean =
    message === message.toUpperCase() && message !== message.toLowerCase();
  const isQuestion: boolean = message.trim().endsWith("?");
  const isSilence: boolean = message.trim() === "";

  if (isSilence) return bobAnswers[4];
  if (isYelling && isQuestion) return bobAnswers[3];
  if (isYelling) return bobAnswers[1];
  if (isQuestion) return bobAnswers[2];
  return bobAnswers[0];
}
