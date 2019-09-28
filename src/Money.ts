import { Expression } from "./Expression";

// import { Doller } from "./Doller";
// import { Franc } from "./Franc";

export class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  public plus(addend: Money): Expression {
    return new Money(this.amount + addend.amount, this._currency);
  }

  public currency(): string {
    return this._currency;
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount && this._currency === money._currency;
  }

  public static doller(amount: number) {
    return new Money(amount, "USD");
  }

  public static franc(amount: number) {
    return new Money(amount, "CHF");
  }
}
