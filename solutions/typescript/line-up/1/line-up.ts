export function format(name: string, number: number): string {
  const lastDigit: number = number % 10;
  const lastTwoDigits: number = number % 100;
  let postfix: string = "th";

  if (lastDigit === 1 && lastTwoDigits !== 11) postfix = "st";
  if (lastDigit === 2 && lastTwoDigits !== 12) postfix = "nd";
  if (lastDigit === 3 && lastTwoDigits !== 13) postfix = "rd";

  return `${name}, you are the ${number}${postfix} customer we serve today. Thank you!`;
}
