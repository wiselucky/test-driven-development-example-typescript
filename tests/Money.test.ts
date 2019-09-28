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

  it("test simple addition", () => {
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

  it("test reduce money different currency", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result: Money = bank.reduced(Money.franc(2), "USD");

    expect(Money.doller(1)).toEqual(result);
  });

  it("test identity rate", () => {
    expect(1).toEqual(new Bank().rate("USD", "USD"));
    expect(1).toEqual(new Bank().rate("CHF", "CHF"));
  });

  it("test mixed addtion", () => {
    const fiveBucks: Expression = Money.doller(5);
    const tenFrancs: Expression = Money.franc(10);

    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const result: Money = bank.reduced(fiveBucks.plus(tenFrancs), "USD");
    expect(Money.doller(10)).toEqual(result);
  });

  it("test sum plus money", () => {
    const fiveBucks: Expression = Money.doller(5);
    const tenFrancs: Expression = Money.franc(10);

    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);

    const result = bank.reduced(sum, "USD");
    expect(Money.doller(15)).toEqual(result);
  });

  it("test sum times", () => {
    const fiveBucks: Expression = Money.doller(5);
    const tenFrancs: Expression = Money.franc(10);

    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);

    const result = bank.reduced(sum, "USD");
    expect(Money.doller(20)).toEqual(result);
  });

  it("test rate is nothing", () => {
    expect(0).toEqual(new Bank().rate("USD", "CHF"));
  });
});
