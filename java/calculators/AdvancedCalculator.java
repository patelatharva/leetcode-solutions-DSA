package calculators;
public class AdvancedCalculator extends SampleCalculator {
    public double power(double base, double exponent) {
        return Math.pow(base, exponent);
    }

    public double sqrt(double value) {
        if (value < 0) {
            throw new ArithmeticException("Square root of negative number");
        }
        return Math.sqrt(value);
    }

    public static void main(String [] args) {
        var calc = new AdvancedCalculator();
        var output = calc.power(2, 3);
        System.out.println("Output: " + output);
    }
}
