// import { Doller } from "./Doller";
// import { Franc } from "./Franc";

export class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public static doller(amount: number) {
    return new Money(amount, "USD");
  }
  public static franc(amount: number) {
    return new Money(amount, "CHF");
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  public equals(money: Money) {
    return this.amount === money.amount && this._currency === money._currency;
  }

  public currency() {
    return this._currency;
  }

  public plus(money: Money) {
    return new Money(this.amount + money.amount, this._currency);
  }
}
