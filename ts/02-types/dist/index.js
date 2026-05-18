"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let test = "Hello, world!";
console.log(test);
// test = 12; cannot assign a number to a string variable, 
// this will cause a type error
let num = 42;
console.log(num);
num = "Hello"; // cannot assign a string to a number variable, 
// this will cause a type error
let bool = true;
// type inference will automatically infer the type of bool as boolean
console.log(bool);
bool = 12; // cannot assign a number to a boolean variable
let anyVar = "This can be any type";
// any is default JS
// generally not used in TypeScript, as it defeats the purpose of type safety
console.log(anyVar);
anyVar = 42; // any type can be assigned to anyVar
anyVar = true; // any type can be assigned to anyVar
anyVar = { name: "Alice" }; // any type can be assigned to anyVar
console.log(anyVar);
let unknownVar;
unknownVar = "This can be any type, but we don't know what it is yet";
console.log(unknownVar);
unknownVar = 42; // unknown type can be assigned to unknownVar
console.log(unknownVar);
console.log(anyVar - anyVar);
if (typeof unknownVar === "number") {
    console.log(unknownVar - unknownVar); // we can perform operations on unknownVar if we check its type first
}
else if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase()); // we can perform string operations on unknownVar if we check its type first
}
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
let today = Day.Monday;
console.log(today); // outputs 1, as enums are zero-indexed by default
today = Day.Friday;
console.log(today); // outputs 5
const nums = [1, 2, 3, 4, 5];
console.log(nums);
let me = ["Jordan", "Java", 32];
// let meObject: object = {
//     name: "Jordan",
//     specialty: "Java",
//     age: 32
// };
let meObject = {
    name: "Jordan",
    specialty: "Java",
    age: 32
};
console.log(meObject);
const employees = ["id", 123, 456, 789];
const employeesBetter = { name: "id", ids: [123, 456, 789] };
let something;
something = "Hello, world!";
// type assertion allows us to tell the compiler 
// that we know the type of something, even if it is currently unknown
console.log(something.toLowerCase());
function add(a, b) {
    return a + b;
}
//# sourceMappingURL=index.js.map