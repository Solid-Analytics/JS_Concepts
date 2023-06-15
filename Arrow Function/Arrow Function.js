/* Basic Array */
var num = [3, 6, 9];

/* Create a function to take in a number and return the square*/
function square(x) {
  return x * x;
}

/* Square of the num array */
// Spuare [9,36,81]

var array = num.map(square);
console.log(array);

/* Simplify - 1  the square function */
var a = num.map(function square(x) {
  return x * x;
});
console.log(a);

/* Simplify - 2  remove the name of the function */
var b = num.map(function (x) {
  return x * x;
});
console.log(a);

/* Simplify - 3  remove the term function */
var c = num.map((x) => {
  return x * x;
});
console.log(c);

/* Simplify - 4  remove the brackets */
var d = num.map((x) => {
  return x * x;
});
console.log(d);

/* Simplify - 5  remove the return */
var e = num.map((x) => x * x);
console.log(e);
