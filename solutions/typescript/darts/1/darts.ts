export function score(x: number, y: number): number {
  const dartThrow: number = Math.hypot(x, y);

  return 0 <= dartThrow && dartThrow <= 1
    ? 10
    : 1 < dartThrow && dartThrow <= 5
      ? 5
      : 5 < dartThrow && dartThrow <= 10
        ? 1
        : 0;
}
