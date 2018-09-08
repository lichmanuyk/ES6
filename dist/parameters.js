'use strict';

// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}`);
// }

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'friend';

  console.log(greeting + ', ' + name);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

//ES5
function sum() {
  var sum = 0;
  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

//ES6
function sum() {
  var sum = 0;

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}
//ES6
function sum() {
  for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  console.log(values.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
  }));
};

sum(5, 7, 2, 10);