'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];

console.log('sdfdsfds');

// //Переберет массив
// for (let xman of xmen) {
//   console.log(xman);
// }

// let iterator = xmen[Symbol.iterator]();
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());

// //Как же перебрать массив с помощью итератора?
// let next = iterator.next();

// while (!next.done) {
//   console.log(next.value);
//   next = iterator.next();
// }


// //Первый пример создание итератора - счетчик от одного до ста
// let idGenerator = {
//   [Symbol.iterator]() {
//     let id = 1;
//     return {
//       next() {
//         let value = id > 100 ? undefined : id++;
//         let done = !value;

//         return { value, done };
//       }
//     }
//   }
// }
// for (let id of idGenerator) {
//   console.log(id);
// }


// //Второй пример создание итератора - генератор десяти случайных чисел
// let randomGenerator = {
//   [Symbol.iterator]() {
//     let count = 1;
//     return {
//       next() {
//         let value = Math.ceil(Math.random() *100);
//         let done = count > 9;
//         count++;
//         return { value, done };
//       }
//     }
//   }
// }
// for (let random of randomGenerator) {
//   console.log(random);
// }

//Напишем один итератор для всех массивов, чтобы код не повторялся (!). 

var ArrayIterator = function () {
  function ArrayIterator(array) {
    _classCallCheck(this, ArrayIterator);

    this.array = array;
    this.index = 0;
  }

  _createClass(ArrayIterator, [{
    key: 'next',
    value: function next() {
      var result = { value: undefined, done: true };

      if (this.index < this.array.length) {
        result.value = this.array[this.index];
        result.done = false;
        this.index++;
      }
      return result;
    }
  }]);

  return ArrayIterator;
}();

//Третий пример создание итератора - класс.


var TaskList = function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.tasks = [];
  }

  _createClass(TaskList, [{
    key: 'addTasks',
    value: function addTasks() {
      for (var _len = arguments.length, tasks = Array(_len), _key = 0; _key < _len; _key++) {
        tasks[_key] = arguments[_key];
      }

      this.tasks = this.tasks.concat(tasks);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return new ArrayIterator(this.tasks);
    }
  }]);

  return TaskList;
}();

var taskList = new TaskList();
taskList.addTasks('Выучить JS', 'Выучить ES6');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = taskList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var task = _step.value;

    console.log(task);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}