export function encode(str: string): string {
  /*
  The regex /(.)\1+/g
  - (.) → captures ANY single character into group 1
  - \1 → backreference: "the same character as group 1"
  - + → one or more additional times (so \1+ = at least one more repeat)
  - result: matches only runs of 2 or more identical characters
  - g → global, scans the whole string

  The callback (match, char) => ...:
  - match → the full matched run (e.g. "aaaa")
  - char → group 1, i.e. the character (e.g. "a")
  - returns `${match.length}${char}` → length + character (e.g. "4a")
  */
  return str.replace(/(.)\1+/g, (match, char) => `${match.length}${char}`);
}

export function decode(str: string): string {
  /*
  The regex /(\d+)(.)/g:
  - (\d+) → captures one or more digits into group 1 (the count, e.g. "12")
  - (.) → captures the single character that follows into group 2 (e.g. "a")
  - g → global, scans the whole string

  The callback (_, count, char) => ...:
  - _ → the full match (e.g. "12a"), ignored here
  - count → group 1, the digits as a string (e.g. "12")
  - char → group 2, the character (e.g. "a")
  - returns char.repeat(Number(count)) → the char repeated N times (Number converts the string to a number)
  */
  return str.replace(/(\d+)(.)/g, (_, count, char) =>
    char.repeat(Number(count)),
  );
}
