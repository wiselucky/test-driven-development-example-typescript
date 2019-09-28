import { Expression } from "./Expression";
import { Money } from "./Money";
import { Sum } from "./Sum";

export class Bank {
  constructor() {}

  public reduced(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
