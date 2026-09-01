export class GameOfLife {
  private outMatrix: number[][] = [];
  private origX: number = 0;
  private origY: number = 0;
  private neighborsTot: number = 8;

  constructor(private readonly matrix: number[][]) {
    this.origX = this.matrix.length;
    this.origY = this.matrix[0]?.length ?? 0;

    // Create a matrix with the same dimensions of the input, filled with 0
    this.outMatrix = Array.from({ length: this.origX }, () =>
      Array(this.origY).fill(0),
    );
  }

  public tick(): unknown {
    for (let i = 0; i < this.origX; i++) {
      for (let j = 0; j < this.origY; j++) {
        let isCurCellAlive: boolean = !!this.matrix[i][j];
        let curNeighborsAlive: number = 0;

        // Fill the 3D neighbors matrix first
        let neighbors: number[] = Array(this.neighborsTot).fill(0);

        for (let k = 0; k < this.neighborsTot; k++) {
          if (k === 0) neighbors[k] = this.matrix[i - 1]?.[j - 1] ?? 0;
          if (k === 1) neighbors[k] = this.matrix[i - 1]?.[j] ?? 0;
          if (k === 2) neighbors[k] = this.matrix[i - 1]?.[j + 1] ?? 0;
          if (k === 3) neighbors[k] = this.matrix[i]?.[j - 1] ?? 0;
          if (k === 4) neighbors[k] = this.matrix[i]?.[j + 1] ?? 0;
          if (k === 5) neighbors[k] = this.matrix[i + 1]?.[j - 1] ?? 0;
          if (k === 6) neighbors[k] = this.matrix[i + 1]?.[j] ?? 0;
          if (k === 7) neighbors[k] = this.matrix[i + 1]?.[j + 1] ?? 0;
        }

        curNeighborsAlive = neighbors.filter((x) => x === 1).length;

        this.outMatrix[i][j] =
          curNeighborsAlive === 3 || (isCurCellAlive && curNeighborsAlive === 2)
            ? 1
            : 0;
      }
    }

    return this.outMatrix;
  }

  public state(): number[][] {
    return this.outMatrix;
  }
}
