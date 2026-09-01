export function isLeap(year: number) {
  return year % 4 !== 0
    ? false
    : year % 100 !== 0
      ? true
      : year % 400 !== 0
        ? false
        : true;
}
