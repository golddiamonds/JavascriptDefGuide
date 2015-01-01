/*
  Work for section 1.1
*/

//variables
var x;

//assignment
x = 1; //could also be decimal
x = "test"; //could also use ''
x = null; //could also use undefined

//object
var book = {
  topic: "JavaScript",
  fat: true
};

//can then access it
book.topic
book["fat"]
book.author = "Flanagan"; //new property
book.contents = {}; //empty object

//arrays
var primes = [2,3,5,7]
primes[0]
primes.length
primes[primes.length-1]
primes[4] = 9; //add new element
primes[4] = 11; //alter element
var empty = []; //empty array
empty.length

//arrays and objects holding arrays and objects
//array with objects
var points = [
  {x:0, y:0},
  {x:1, y:1}
];
//object with arrays
var data = {
  trial1: [[1,2],[3,4]],
  trial2: [[2,3],[4,5]]
};

//operators
3 + 2
3 - 2
points[1].x - points[0].x
"3" + "2" //will return "32"; concatenates

//shorthand
var count = 0;
count++;
count--;
count += 2;
count *= 3;
count

//relational
var x = 2, y = 3; //semicolon with variable declaration
console.log("x = " + x + ", y = " + y)
x == y //false
x != y //true
x < y //true
x <= y // true
x > y //false
x >= y //false
"two" == "three" //false
"two" > "three" //true
false == (x > y); //true

//logical operators
(x == 2) && (y == 3); //true
(x > 3) || (y < 3) //false
!(x == y) //true

//functions
function plus1(x) {
  return x+1;
}
console.log("plus1(y) = " + plus1(y))

var square = function(x) {
  return x*x;
}; //use semicolon with assignment
square(plus1(y)); //use semicolon when function is evoked
console.log("square(plus1(y)) = " + square(plus1(y)))

//semicolon logic in js is satan...

//methods
var a = [];
a.push(1,2,3);
console.log(a)
a.reverse();
console.log(a)

//own method
console.log("Distance between points")
points.dist = function() {
  var p1 = this[0];
  var p2 = this[1];
  var a = p2.x-p1.x;
  var b = p2.y-p1.y;
  return Math.sqrt(a*a + b*b);
};
var distance;
distance = points.dist();
console.log(distance)

//assign a diff var to "points"
var diffsetofpoints = points;
diffdistance = points.dist(); //actually same...but in diff object
console.log(diffdistance)

//constrol structure statements
function abs(x) {
  if (x >= 0) {
    return x;
  }
  else {
    return -x;
  }
}
var pos = 3;
var abspos = abs(pos);
console.log("abs(3) = " + abspos)
var neg = -3;
var absneg = abs(neg);
console.log("abs(-3) = " + absneg)

//factorial
function factorial(n) {
  var product = 1;
  while(n > 1) {
    product *=n;
    n--;
  }
  return product;
}
console.log("4! = " + factorial(4))

//another factorial function
function factorial2(n) {
  var product = 1;
  for(i=2; i <= n; i++)
    product *= i;
  return product;
}
console.log("4! = " + factorial2(4))

//define a constructor function
function Point(x,y) {
  this.x = x;
  this.y = y;
}

//now you can use the constructor with "new"
var p = new Point(1, 1);

//let's setup some methods using the
//"prototype" object of Point
Point.prototype.r = function() {
  return Math.sqrt(
    this.x * this.x +
    this.y * this.y
  );
};

console.log("p.r() = " + p.r())
