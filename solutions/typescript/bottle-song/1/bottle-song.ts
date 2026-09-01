export const recite = (
  initialBottleCount: number,
  takeDownCount: number,
): string[] => {
  const numbers: string[] = [
    "no",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  const firstVerse = (n: number, pl: string): string =>
    `${numbers[n]} green bottle${pl} hanging on the wall,`;

  const middleVerse: string = `And if one green bottle should accidentally fall,`;

  const finalVerse = (n: number, pl: string): string =>
    `There'll be ${numbers[n].toLowerCase()} green bottle${pl} hanging on the wall.`;

  let output: string[] = [];

  for (
    let i = initialBottleCount;
    i > initialBottleCount - takeDownCount;
    i--
  ) {
    output.push(
      firstVerse(i, i !== 1 ? "s" : ""),
      firstVerse(i, i !== 1 ? "s" : ""),
      middleVerse,
      finalVerse(i - 1, i - 1 !== 1 ? "s" : ""),
      ``,
    );
  }
  output.pop(); // remove last empty element

  return output;
};
