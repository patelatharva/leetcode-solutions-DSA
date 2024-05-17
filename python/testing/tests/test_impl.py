import unittest
from impl import Calculator


class TestCalculator(unittest.TestCase):

    def setUp(self) -> None:
        super().setUp()
        self.calculator = Calculator()

    def test(self):
        self.assertEqual(self.calculator.add(1, 2), 3,
                         "Addition should work as expected.")
        self.assertEqual(self.calculator.sub(1, 2), -1,
                         "Subtraction should work as expected.")
        self.assertEqual(self.calculator.mult(2,3), 6, "Multiplication should work as expected.")        


if __name__ == '__main__':
    unittest.main()
