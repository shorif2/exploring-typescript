// Formats a string to upper or lower case based on the optional toUpper flag (defaults to upper).
function formatString(input: string, toUpper?: boolean): string {
  return toUpper === undefined || toUpper
    ? input.toUpperCase()
    : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
//==============================================

// Returns items with a rating of 4 or higher.
interface filter {
  title: string;
  rating: number;
}
function filterByRating(items: filter[]): filter[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
//==============================================

// Concatenates multiple arrays into a single array.
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: any = [];
  arrays.map((arr) => result.push(...arr));
  return result;
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
//==============================================

// Defines a Vehicle base class and a Car subclass with additional model information.
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
//==============================================

// Processes a value: returns string length or double the number.
type inputType = string | number;
function processValue(value: inputType): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
console.log(processValue("hello"));
console.log(processValue(10));

// Returns the product with the highest price, or null if none found.
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  const allPrice = products.map((product) => product.price);
  const result = products.find(
    (product) => product.price === Math.max(...allPrice)
  );
  return result ? result : null;
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];
console.log(getMostExpensiveProduct(products));
//==============================================

// Returns whether a given day is a Weekday or Weekend.
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday) {
    return "Weekend";
  } else if (day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
//==============================================

// Asynchronously returns the square of a number after 1 second; rejects if negative.
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);
