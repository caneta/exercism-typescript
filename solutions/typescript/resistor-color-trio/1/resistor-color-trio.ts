export function decodedResistorValue(colors?: string[]) {
  let outStr: string = "";
  let numberOfZeros: number = 0;

  if (!colors) return COLORS;

  for (const [idx, val] of colors.entries()) {
    if (idx === 0 || idx === 1)
      outStr += val === "black" ? "" : COLORS.indexOf(val);

    if (idx === 2) {
      numberOfZeros = Number(COLORS.indexOf(val));
      if (outStr === "") outStr = "0";
    }

    if (idx > 2) break;
  }

  switch (numberOfZeros) {
    case 0:
      outStr += " ohms";
      break;
    case 1:
      outStr += "0 ohms";
      break;
    case 2:
    case 3:
      outStr += " kiloohms";
      break;
    case 4:
      outStr += "0 kiloohms";
      break;
    case 6:
      outStr += " megaohms";
      break;
    case 9:
      outStr += " gigaohms";
      break;
  }
  return outStr;
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
