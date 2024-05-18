package org.example.calculators;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class SampleCalculatorTest {

    @Test
    public void testAddition() {
        System.out.println("Running testAddition");
        SampleCalculator calculator = new SampleCalculator();
        assertEquals(5, calculator.add(2, 3));
        assertEquals(0, calculator.add(-1, 1));
        assertEquals(-3, calculator.add(-1, -2));
    }

    @Test
    public void testSubtraction() {
        System.out.println("Running testSubtraction");
        SampleCalculator calculator = new SampleCalculator();
        assertEquals(1, calculator.subtract(3, 2));
        assertEquals(-2, calculator.subtract(-1, 1));
        assertEquals(1, calculator.subtract(-1, -2));
    }
}