import { Bank } from "../src/Bank";
import { Money } from "../src/Money";
import { Expression } from "../src/Expression";

describe("Money Clsss Test", () => {
  it("test multiplication", () => {
    const five = Money.doller(5);
    expect(Money.doller(10)).toEqual(five.times(2));
    expect(Money.doller(15)).toEqual(five.times(3));
  });

  it("test equality", () => {
    expect(Money.doller(5).equals(Money.doller(5))).toEqual(true);
    expect(Money.doller(5).equals(Money.doller(6))).toEqual(false);
    expect(Money.doller(5).equals(Money.franc(5))).toEqual(false);
  });

  it("test currency", () => {
    expect("USD").toEqual(Money.doller(1).currency());
    expect("CHF").toEqual(Money.franc(1).currency());
  });

  it("simple addition", () => {
    const five: Money = Money.doller(5);
    const sum: Expression = five.plus(five);
    const bank = new Bank();
    const reduced: Money = bank.reduced(sum, "USD");
    expect(Money.doller(10)).toEqual(reduced);
  });
});
