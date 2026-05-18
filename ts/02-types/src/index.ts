let test: string = "Hello, world!";

console.log(test);

// test = 12; cannot assign a number to a string variable, 
// this will cause a type error


let num: number = 42;

console.log(num);


num = "Hello"; // cannot assign a string to a number variable, 
// this will cause a type error

let bool = true;
// type inference will automatically infer the type of bool as boolean

console.log(bool);

bool = 12; // cannot assign a number to a boolean variable


let anyVar: any = "This can be any type";
// any is default JS
// generally not used in TypeScript, as it defeats the purpose of type safety
console.log(anyVar);

anyVar = 42; // any type can be assigned to anyVar
anyVar = true; // any type can be assigned to anyVar
anyVar = { name: "Alice" }; // any type can be assigned to anyVar

console.log(anyVar);

let unknownVar: unknown;

unknownVar = "This can be any type, but we don't know what it is yet";
console.log(unknownVar);

unknownVar = 42; // unknown type can be assigned to unknownVar
console.log(unknownVar);

console.log(anyVar - anyVar);
if (typeof unknownVar === "number") {
    console.log(unknownVar - unknownVar); // we can perform operations on unknownVar if we check its type first
} else if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase()); // we can perform string operations on unknownVar if we check its type first
}

enum Day {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

let today: Day = Day.Monday;
console.log(today); // outputs 1, as enums are zero-indexed by default

today = Day.Friday;
console.log(today); // outputs 5

const nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);

let me: [string, string, number] = ["Jordan", "Java", 32];

// let meObject: object = {
//     name: "Jordan",
//     specialty: "Java",
//     age: 32
// };
let meObject: { name: string; specialty: string; age: number } = {
    name: "Jordan",
    specialty: "Java",
    age: 32
};


console.log(meObject);

const employees: [string, number, number, number] = ["id", 123, 456, 789];

const employeesBetter = { name: "id", ids: [123, 456, 789] };

let something: unknown;

something = "Hello, world!";

// type assertion allows us to tell the compiler 
// that we know the type of something, even if it is currently unknown
console.log((something as string).toLowerCase());


function add(a: number, b: number): number {
    return a + b;
}