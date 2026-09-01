export function decodedValue(colors?: string[]) {
  let tmpStr: string = "";

  if (!colors) return COLORS;

  for (const [idx, val] of colors.entries()) {
    if (idx > 1) break;
    tmpStr += COLORS.indexOf(val);
  }

  return Number(tmpStr);
}

export const COLORS = [
  "black", // 0
  "brown", // 1
  "red", // 2
  "orange", // 3
  "yellow", // 4
  "green", // 5
  "blue", // 6
  "violet", // 7
  "grey", // 8
  "white", // 9
];
