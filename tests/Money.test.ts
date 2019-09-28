import { Bank } from "../src/Bank";
import { Money } from "../src/Money";
import { Sum } from "../src/Sum";
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

  it("test plus returns sum", () => {
    const five: Money = Money.doller(5);
    const result: Expression = five.plus(five);
    const sum: Sum = result as Sum;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  it("test reduce sum", () => {
    const sum: Expression = new Sum(Money.doller(3), Money.doller(4));
    const bank = new Bank();
    const result: Money = bank.reduced(sum, "USD");

    expect(Money.doller(7)).toEqual(result);
  });

  it("test reduce money", () => {
    const bank = new Bank();
    const result: Money = bank.reduced(Money.doller(1), "USD");

    expect(Money.doller(1)).toEqual(result);
  });
});
