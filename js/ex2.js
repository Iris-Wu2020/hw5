/* hw5
Exercise 2 JavaScript code
Starting with an array containing the numbers 1 through 10, use filter, map and reduce to produce the following.  Use console.log to display the results.
a.	An array of odd numbers
*/
console.log("Wu's Output from hw5 Exercise 2");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(x => x % 2 !== 0);
console.log(oddNumbers);

//b.	An array of numbers divisible by 2 or 5
const divisibleNumbers2or5 = numbers.filter(x => (x % 2 === 0) || (x % 5 === 0));
console.log(divisibleNumbers2or5);

//c.	An array of numbers divisible by 3 squared
const divisibleNumbers3Square = numbers.filter(x => x % (3 ** 2) === 0);
console.log(divisibleNumbers3Square);

//d.	The sum of the following: square the numbers divisible by 5
const sumSquareDivisibleNumbers = numbers.filter(x => x % 5 === 0).map(x => x ** 2).reduce((acc, value) => acc + value, 0);
console.log(sumSquareDivisibleNumbers);