// //Функция-генератор
// function* generator() {
//   console.log('Start');
//   yield 1;
//   yield 2;
//   yield 3;
//   console.log('Finish');
// }

// //То же самое, только с помощью итераторов (слишком много кода)
// function generator() {
//   let currunt = 1;
//   console.log('Start');
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           let result = {value: undefined, done: true};
//           if (currunt <= 3) {
//             result.value = currunt;
//             result.done = false;
//             currunt++;
//           } else {
//             result.value = undefined;
//             result.done = true;
//             console.log('Finish');
//           }
//           return result;
//         }
//       }
//     }
//   }
// }

// let iterator = generator()[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


//Теперь создам функцию-генератор, принимающую значения и выводящая промежуточные.
function* range(start, end) {
  let current = start;
  while(current <= end) {
    yield current++;
  }
}
for (let item of range(1, 10)) {
  console.log(item);
}

//Можно даже скопировать этот генератор как метод объекта
let numbers = {
  *range(start, end) {
    let current = start;
    while (current <= end) {
      yield current++;
    }
  }
}
for (let item of numbers.range(1, 10)) {
  console.log(item);
}

  
