
/*
let fruits = ["apple", "orange", "banana"];
fruits.push("mange");
console.log(fruits);

fruits.unshift("avocado");
console.log(fruits);

//.indexOf
var x = fruits.indexOf("banana");
console.log(x);
// .splice
let people = ["Jame", "Paul", "Sue", "David"];
var y = people.splice(2, 1);
console.log(y);
console.log(people);
*/
//.map
let nums = [1, 2, 3, 4, 5];
/*
let result = nums.map(function (n) {
    return n + 1;
}
) 
*/

let result = nums.map(n => n + 2);
console.log(result);

//.filter

/* let odd = nums.filter(
    function (n) {
        return n % 2;
    }
) */


let odd = nums.filter(n => n % 2);
console.log(odd);
//even
/* let even = nums.filter(
    function (n) {
        return !(n % 2);
    }
) */
let even = nums.filter(n => !(n % 2));
console.log(even);

// reduce to get factorial of 5
let factorial = nums.reduce(
    function (a, n) {
        return a * n;
    }
)
console.log(factorial);

let sum = nums.reduce((a, n) => (a + n));
console.log(sum);

// user age 
var users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 21 },
    { name: 'Dave', age: 16 },
    { name: 'Eve', age: 19 }
];
let age = users.filter(
    function (users) {
        return users.age >= 18;
    }
)
console.log(age);




