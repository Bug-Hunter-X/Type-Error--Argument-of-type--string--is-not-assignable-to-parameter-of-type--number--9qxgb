function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input: Both arguments must be numbers");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(5, "10"); // No compile error, handles the error at runtime
let result2 = addSafe(5, 10); // No compile error, returns 15