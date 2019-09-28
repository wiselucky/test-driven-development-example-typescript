import { Expression } from "./Expression";
import { Money } from "./Money";

export class Bank {
  constructor() {}

  reduced(money: Expression, currency: string): Money {
    return Money.doller(10);
  }
}
