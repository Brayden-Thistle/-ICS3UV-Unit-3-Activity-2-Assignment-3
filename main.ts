/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-02
 * @fileoverview created a program to tell you how much change you have
 */
//variables
let total = 163

let toonie = Math.floor(total / 200);
total = total % 200;

let loonie = Math.floor(total / 100)
total = total % 100

let quarter = Math.floor(total / 25)
total = total % 25

let dime = Math.floor(total / 10)
total = total % 10

let nickel = Math.floor(total / 5);
total = total % 5

//output
console.log(`your leftover change is: ${toonie} toonies, ${loonie} loonies, ${quarter} quarters, ${dime} dimes, and ${nickel} nickels`)

console.log("\nDone");