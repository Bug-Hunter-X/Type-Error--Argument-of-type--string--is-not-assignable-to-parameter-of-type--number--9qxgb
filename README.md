# Type Error in TypeScript: String Argument to Number Function

This repository demonstrates a common type error in TypeScript that occurs when a function expecting a numeric argument receives a string instead. The error is caught during compilation, helping prevent runtime issues.

## Bug Description

A simple addition function `add` is defined to accept two numbers and return their sum. However, when calling the function with a string argument, a TypeScript compiler error occurs as the string cannot be implicitly converted to a number.

## Solution

The provided solution uses type guards to check if the input is a number before performing the addition.  Alternatively, input validation could be implemented using `isNaN`.