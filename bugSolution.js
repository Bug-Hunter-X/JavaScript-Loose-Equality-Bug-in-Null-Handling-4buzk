function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined || typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Handle null, undefined, and non-numeric values
  }
  return a + b; 
}