import { AdvancedCalculator } from "../../testing/AdvancedCalculator";

describe("AdvancedCalculator", () => {
    let calc: AdvancedCalculator;
    beforeEach(() => {
        calc = new AdvancedCalculator();
    });

    test("Should calculate power correctly", () => {
        expect(calc.power(2, 3)).toBe(8);
    });
});
