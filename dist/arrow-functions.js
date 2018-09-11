'use strict';

var add = function add(x, y) {
  return x + y;
};

var square = function square(x) {
  return x * x;
};

var giveMeAnswer = function giveMeAnswer() {
  return 42;
};

var log = function log() {
  return console.log('Logging');
};

var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};

//Возвращает литерал объекта
var getPerson = function getPerson() {
  return { name: 'John' };
};

//Самовызывающаяся стрелочная функция
(function () {
  return console.log('IIFE');
})();

//Работа стрелочных функций с массивами
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
numbers.forEach(function (num) {
  return sum += num;
});

var squared = numbers.map(function (n) {
  return n * n;
});

//Контекст вызова стрелочных функций...если как метод, то она потеряет контекст на window. А если уже внутри метода, то наоборот приобретет.
var person = {
  name: 'Bob',
  greet: function greet() {
    var _this = this;

    setTimeout(function () {
      console.log('Hello, my name is ' + _this.name);
      console.log(_this);
    }, 2000);
  }
};
person.greet();

//Стрелочные нельзя использовать в конструкторах, то есть с new.
// let Task = () => console.log('Creating a task');
// let task = new Task();

//Нельзя использовать с этими методами, т.к. опять же теряется контекст
// Task.bind();
// Task.call();
// Task.apply();