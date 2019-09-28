import { Expression } from "./Expression";
import { Sum } from "./Sum";
import { Bank } from "./Bank";

export class Money implements Expression {
  public amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public reduce(bank: Bank, to: string): Money {
    const rate: number = bank.rate(this._currency, to);
    return new Money(this.amount / rate, to);
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
