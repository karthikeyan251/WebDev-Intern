const billInput = prompt("Enter the bill amount (example: 100):");
if (billInput === null || billInput.trim() === "") {
  console.log("Input cancelled or empty. Assignment 2 was not run.");
} else {
  const tipInput = prompt("Enter the tip percentage (example: 15):");
  if (tipInput === null || tipInput.trim() === "") {
    console.log("Tip input cancelled or empty. Assignment 2 was not run.");
  } else {
    const subtotal = Number(billInput);
    const tipPercentage = Number(tipInput);

    if (!Number.isFinite(subtotal) || !Number.isFinite(tipPercentage) ||
        subtotal < 0 || tipPercentage < 0) {
      console.log("Please enter valid non-negative numbers.");
    } else {
      const tip = subtotal * tipPercentage / 100;
      let total = subtotal;
      total += tip;

      console.log(`Subtotal: $${subtotal}`);
      console.log(`Tip Percentage: ${tipPercentage}%`);
      console.log(`Calculated Tip: $${tip}`);
      console.log(`Total Amount to Pay: $${total}`);
    }
  }
}
