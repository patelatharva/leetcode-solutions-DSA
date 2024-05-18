package org.example;
import org.example.calculators.SampleCalculator;
//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        System.out.println("Hello and welcome!");

        var calc = new SampleCalculator();

        System.out.println("Addition: " + calc.add(1, 2));
        System.out.println("Subtraction: " + calc.subtract(3, 2));
    }
}