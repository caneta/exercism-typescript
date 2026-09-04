export class Squares {
  constructor(private readonly count: number) {}

  get squareOfSum(): number {
    // Gauss's formula (or triangular number formula)
    const sum = (this.count * (this.count + 1)) / 2; // 1 + 2 + ... + n
    return Math.pow(sum, 2);
  }

  get sumOfSquares(): number {
    // Faulhaber's formula (or square pyramidal number formula)
    return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
