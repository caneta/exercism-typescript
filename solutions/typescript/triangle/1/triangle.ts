export class Triangle {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;
  private readonly isTriangle: boolean;

  constructor(...sides: number[]) {
    this.a = sides[0];
    this.b = sides[1];
    this.c = sides[2];
    this.isTriangle =
      this.a <= 0 && this.b <= 0 && this.c <= 0
        ? false
        : this.a + this.b >= this.c &&
            this.b + this.c >= this.a &&
            this.a + this.c >= this.b
          ? true
          : false;
  }

  #calculateTriangleType(condition: boolean) {
    if (!this.isTriangle) return false;
    return condition ? true : false;
  }

  get isEquilateral() {
    const cond: boolean = this.a === this.b && this.b === this.c;
    return this.#calculateTriangleType(cond);
  }

  get isIsosceles() {
    const cond: boolean =
      this.a === this.b || this.a === this.c || this.b === this.c;
    return this.#calculateTriangleType(cond);
  }

  get isScalene() {
    const cond: boolean =
      this.a !== this.b && this.a !== this.c && this.b !== this.c;
    return this.#calculateTriangleType(cond);
  }
}
