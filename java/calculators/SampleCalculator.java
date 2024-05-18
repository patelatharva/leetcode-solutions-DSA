package calculators;
public class SampleCalculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) throws ArithmeticException {
        if (b == 0) {
            throw new ArithmeticException("Division by zero");
        }
        return a / b;
    }

    public static void main(String [] args) {
        var calc = new SampleCalculator();
        var output = calc.add(1, 2);
        System.out.println("Output: " + output);
    }
}

