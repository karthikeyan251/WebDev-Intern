
const initialInventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

function getCategory(price) {
  if (price < 0) {
    return "Invalid";
  } else if (price < 100) {
    return "Budget";
  } else if (price < 200) {
    return "Standard";
  } else {
    return "Premium";
  }
}

function getBadge(category) {
  switch (category) {
    case "Budget":
      return "[BUDGET]";
    case "Standard":
      return "[STANDARD]";
    case "Premium":
      return "[PREMIUM]";
    default:
      return "[INVALID]";
  }
}

function calculateTotal(items, taxRate = 0, discountRate = 0) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    if (!items[i] || typeof items[i].price !== "number") {
      continue;
    }

    if (items[i].price < 0) {
      break;
    }

    total += items[i].price;
  }

  const discount = total * discountRate;
  const taxableAmount = total - discount;
  const tax = taxableAmount * taxRate;

  return {
    total,
    discount,
    tax,
    finalTotal: taxableAmount + tax
  };
}

const formatProduct = (item) =>
  `${item.name.toUpperCase()}: $${item.price}`;

function runProject() {
  console.clear();

  console.log("--- Initializing Inventory System ---");

  const inventory = [...initialInventory];

  const nameInput = prompt("Enter product name:", "Monitor");

  if (nameInput === null || nameInput.trim() === "") {
    console.warn("Product name missing. No product added.");
    return;
  }

  const priceInput = prompt("Enter product price:", "150");

  if (priceInput === null || priceInput.trim() === "") {
    console.warn("Price missing. No product added.");
    return;
  }

  const name = nameInput.trim();
  const price = Number(priceInput);

  if (!Number.isFinite(price) || price < 0) {
    console.error("Enter a valid, non-negative price.");
    return;
  }

  inventory.push({ name, price });

  console.log(
    `[Prompt executed: User adds "${name}" at "$${price}"]`
  );

  // Search using a loop, break and continue.
  let found = false;

  for (let i = 0; i < inventory.length; i++) {
    if (!inventory[i].name) continue;

    if (inventory[i].name.toLowerCase() === "monitor") {
      found = true;
      break;
    }
  }

  if (found) {
    console.log("Search result: Found Monitor.");
  }

  console.log("\n--- Processing Inventory Roster (forEach) ---");

  inventory.forEach((item) => {
    const category = getCategory(item.price);

    console.log(
      `* Item: ${item.name} ($${item.price}) -> Category: ${category} ${getBadge(category)}`
    );
  });

  console.log("\n--- Financial Analytics ---");

  const result = calculateTotal(inventory, 0.05, 0.10);

  console.log(`Total Inventory Value: $${result.total}`);
  console.log(
    `After 10% discount and 5% tax: $${result.finalTotal.toFixed(2)}`
  );

  const affordable = inventory.filter(
    (item) => item.price < 200
  );

  console.log(
    "Filtered Affordable Items (Under $200):",
    affordable.map((item) => item.name)
  );

  const report = inventory.map(formatProduct);

  console.log("Formatted Report List:", report);
  console.log("--- Project Complete ---");

  document.getElementById("status").textContent =
    "Completed! Check the browser Console.";
}

document.getElementById("runBtn").addEventListener("click", runProject);
