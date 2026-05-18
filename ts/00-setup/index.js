import axios from "axios";
import print, { add, subtract } from "./calc.js";

console.log("Hello, world!");

console.log(add(1, 2));

console.log(subtract(1, 2));

print("This is a test.");

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        print(response.data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });