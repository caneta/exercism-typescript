export const eggCount = (displayValue: number): number => {
  // Using "1" as a string separator for split()
  return displayValue.toString(2).split("1").length - 1;
};
