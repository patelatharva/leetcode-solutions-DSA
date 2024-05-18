package org.example.calculators;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
public class AdvancedCalculatorTest {
    @Test
    public void testPower() {
        System.out.println("Running testPower");
        var calc = new AdvancedCalculator();
        assertEquals(0, calc.power(0,1));
        assertEquals(8, calc.power(2,3));
        assertEquals(0.5, calc.power(2,-1));
    }
}
