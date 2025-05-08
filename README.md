# TypeScript Interfaces vs Types: What’s the Difference?

TypeScript offers two powerful tools for defining the shape of data: interface and type. At first glance, they may appear to serve the same purpose—and in many ways, they do. However, there are some key differences between the two. Understanding when and why to use one over the other can make your TypeScript code cleaner, more maintainable, and easier to reason about.

In this post, we’ll explore the similarities, differences, and ideal use cases for both interface and type.

### 🔹 What They Have in Common

Both interface and type can be used to describe the structure of an object. Here's a simple example using both:

```ts
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
```

Both of these define the shape of a User object with a name and age property. So far, so good.

### 🔸 Key Differences

**1. Extending and Merging**
Interfaces are extendable and can be merged.

You can extend interfaces using extends, and even declare the same interface multiple times—TypeScript will automatically merge them.

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}
```

This is particularly useful in large applications and libraries where augmentation is needed.

Types are not mergeable. You can extend them with intersections, but you can’t redefine a type once it's declared.

```
type Animal = {
  name: string;
};

// Error: Duplicate identifier
// type Animal = {
//   age: number;
// };

```

**2. Union and Intersection Types**
Types are more powerful when it comes to unions and intersections.

```
type Status = "success" | "error" | "loading";

type Combined = { name: string } & { age: number };

```

While interfaces can use extends for composition, only type supports union types directly.
**3. Primitives and Tuples**
Only type can represent primitives, tuples, and other complex constructs.

```
type ID = string | number;

type Point = [number, number];
```

Interfaces can’t be used for these purposes—they're strictly for object shapes and classes.

4. Implementation with Classes
   Both interface and type can be used to define contracts for classes, but interface is more natural in this context.

```
interface Person {
  name: string;
  speak(): void;
}

class Student implements Person {
  name: string;
  speak() {
    console.log("Hello");
  }
}
```

Interfaces can’t be used for these purposes—they're strictly for object shapes and classes.

### Conclution:

In many situations, you can use interface or type interchangeably. But knowing their strengths helps you make better design choices. Use interface when working with object shapes, especially in class-based OOP or public APIs. Use type when you need union types, primitives, or complex combinations.

# Understanding Union and Intersection Types in TypeScript

One of the most powerful features in TypeScript is its type system, which allows developers to write safer and more expressive code. Two key tools in that system are union types and intersection types.

These types enable you to define variables that can hold multiple possible shapes or combine multiple shapes into one. In this post, we’ll walk through what union and intersection types are, and how to use them effectively in real-world scenarios.

### 🔀 Union Types (|)

A union type describes a value that can be one of several types. It’s written using the pipe (|) symbol.

```ts
type Status = "loading" | "success" | "error";

function showStatus(status: Status) {
  console.log(`Current status: ${status}`);
}

showStatus("success"); //  Valid
showStatus("idle"); //  Error: 'idle' is not assignable to type 'Status'
```

Here, the Status type can be one of three string literals. This pattern is perfect for enums, error handling states, or flags.

```ts
type ID = string | number;

function printId(id: ID) {
  console.log("Your ID is:", id);
}

printId(123); // OK
printId("abc123"); // OK
```

The ID type can be either a string or a number. This is useful when data might come in different formats (e.g., from an API or form).

### ➕ Intersection Types (&)

An intersection type combines multiple types into one. The resulting type has all properties from the combined types.

```
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 101
};

```

Here, Staff must have both name and employeeId, as it’s an intersection of Person and Employee.

```
type Drivable = {
  drive(): void;
};

type Flyable = {
  fly(): void;
};

type FlyingCar = Drivable & Flyable;

const myCar: FlyingCar = {
  drive: () => console.log("Driving on the road"),
  fly: () => console.log("Flying in the sky")
};

```

Intersection types are excellent when building rich object contracts where multiple capabilities are required.

🆚 Union vs. Intersection – Key Differences

### Conclution

Union and intersection types help you express complex relationships in your data models without sacrificing type safety. Use unions when a variable can take multiple forms, and use intersections when something must satisfy multiple contracts at once.

By mastering these two constructs, you’ll write TypeScript that is both flexible and robust.
