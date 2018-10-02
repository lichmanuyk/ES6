let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

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
class ArrayIterator {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }
  next() {
    let result = { value: undefined, done: true };

    if (this.index < this.array.length) {
      result.value = this.array[this.index];
      result.done = false;
      this.index++;
    }
    return result;
  }
}

//Третий пример создание итератора - класс.
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTasks(...tasks) {
    this.tasks = this.tasks.concat(tasks);
  }

  [Symbol.iterator]() {
    return new ArrayIterator(this.tasks);
  }
}

let taskList = new TaskList();
taskList.addTasks('Выучить JS', 'Выучить ES6');

for (let task of taskList) {
  console.log(task);
}