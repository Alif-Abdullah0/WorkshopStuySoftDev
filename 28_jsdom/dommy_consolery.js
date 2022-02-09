// Alif Abdullah, Alejandro Alonso, Shadman Rakib
// SoftDev pd0
// K28 -- Getting more comfortable with the dev console and the DOM
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

// hmm
// so to add, on elements, you would take their list
// and then append a new element
var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

// but to subtract elements, you can get all elements of a certain tag, and delete the appropriate one
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

// this adds red to the class attribute. I wonder if <attribute>List is valid
// for all attributes?
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

// stripes the elements red and blue
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

function fib(n){
    if (n <= 1){
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

function fact(n){
    if (n == 0){
        return 1
    } else {
        return fact(n - 1) * n
    }
}

function gcd(a, b) {
	let min = 0;
	if ( a <= b ) { min = a; }
  else { min = b; }
  while ( min > 1 ) {
  if ( a % min == 0 && b % min == 0 )
  { return min; }
  min --;
  }
}

let fibo = document.getElementById("fib");
fibo.innerHTML= "The result of the Fibonnaci function with input 7 is " + fib(7);
let facto = document.getElementById("fact");
facto.innerHTML= "The result of the factorial function with input 6 is " + fact(6);
let gcdo = document.getElementById("gcd");
gcdo.innerHTML= "The result of the greatest common denominator function with inputs 42 and 24 is " + gcd(42, 24);
