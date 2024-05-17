import { Calculator } from "../../testing/Calculator";

describe("Calculator", () => {
    let calc: Calculator;
    beforeEach(() => {
        calc = new Calculator();
    });

    test("Should add two numbers correctly", () => {
        expect(calc.add(2, 3)).toBe(5);
    });

    test("Should subtract two numbers corrrectly", () => {
        expect(calc.subtract(3, 2)).toBe(1);
    });
});
