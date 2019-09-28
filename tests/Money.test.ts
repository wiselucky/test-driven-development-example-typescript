import { Money } from "../src/Money";

describe("Money Clsss Test", () => {
  it("指定した金額と単位数によって、正しい計算結果を返す", () => {
    const five = Money.doller(5);
    expect(Money.doller(10)).toEqual(five.times(2));
    expect(Money.doller(15)).toEqual(five.times(3));
  });

  it("ある５ドルのDollerオブジェクトと別の５ドルのDollerオブジェクトは等価である", () => {
    expect(Money.doller(5).equals(Money.doller(5))).toEqual(true);
    expect(Money.doller(5).equals(Money.doller(6))).toEqual(false);
  });

  it("DollerオブジェクトとFrancオブジェクトを比較すると等価にならない", () => {
    expect(Money.doller(5).equals(Money.franc(5))).toEqual(false);
  });

  it("通貨の確認を行う", () => {
    expect("USD").toEqual(Money.doller(1).currency());
    expect("CHF").toEqual(Money.franc(1).currency());
  });

  it("同じ通貨の加算が正しく行えること", () => {
    const sum: Money = Money.doller(5).plus(Money.doller(5));
    expect(sum).toEqual(Money.doller(10));
  });
});
