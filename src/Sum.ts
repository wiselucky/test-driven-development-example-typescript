import { Money } from "./Money";
import { Expression } from "./Expression";
import { Bank } from "./Bank";

export class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string) {
    const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  public plus(addend: Expression) {
    return new Sum(this.augend, this.addend);
  }
}
