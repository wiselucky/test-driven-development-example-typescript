export class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  equals(pair: Pair): boolean {
    return this.from === pair.from && this.to === pair.to;
  }

  toString(): string {
    return `${this.from}-${this.to}`;
  }

  hashCode(): number {
    return 0;
  }
}
