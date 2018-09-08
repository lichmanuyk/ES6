// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}`);
// }

function greet(greeting = 'Hello', name = 'friend') {
  console.log(`${greeting}, ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

//ES5
function sum() {
  var sum = 0;
  Array.prototype.forEach.call(arguments, function(value) {
    sum += value;
  });
  console.log(sum);
}

//ES6
function sum(...values) {
  let sum = 0;
  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}
//ES6
function sum(...values) {
  console.log(values.reduce(function(prevValue, currentValue) {
    return prevValue + currentValue;
  }))
};

sum(5, 7, 2, 10);