let add = (x,y) => x+y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('Logging');

let multiply = (x,y) => {
  let result = x * y;
  return result;
}; 

//Возвращает литерал объекта
let getPerson = () => ({ name: 'John'});

//Самовызывающаяся стрелочная функция
(() => console.log('IIFE'))();

//Работа стрелочных функций с массивами
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach((num) => sum += num);

let squared = numbers.map(n => n * n);

//Контекст вызова стрелочных функций...если как метод, то она потеряет контекст на window. А если уже внутри метода, то наоборот приобретет.
let person = {
  name: 'Bob',
  greet: function() {
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
      console.log(this);
    }, 2000);
  }
}
person.greet();

//Стрелочные нельзя использовать в конструкторах, то есть с new.
// let Task = () => console.log('Creating a task');
// let task = new Task();

//Нельзя использовать с этими методами, т.к. опять же теряется контекст
// Task.bind();
// Task.call();
// Task.apply();