import { Expression } from "./Expression";
import { Money } from "./Money";
import { Pair } from "./Pair";

export class Bank {
  //private rates: Map<Pair, number> = new Map<Pair, number>();
  private rates: Map<string, number> = new Map<string, number>();
  constructor() {}

  public reduced(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).toString(), rate);
  }

  public rate(from: string, to: string): number {
    if (from === to) return 1;
    const rate = this.rates.get(new Pair(from, to).toString());

    if (rate) return rate;
    return 0;
  }
}
