// //1
// function* generator() {
//   let result = 1 + (yield);
//   console.log(`Result: ${result}`);
// }

// let iterator = generator();
// console.log(iterator.next()); // Первый вызов next() запускает генератор. Остальные уже перебирают
// console.log(iterator.next(1));

// //2 - создали массив с помощью yield и вызовов next()
// function* generator() {
//   let array = [yield, yield, yield];
//   console.log(array[2]);
// }
// let iterator = generator();
// console.log(iterator.next());
// console.log(iterator.next(1));
// console.log(iterator.next(2));
// console.log(iterator.next(3));

//3 - yield может возвращать как просто массив, так и перебирать и его самого. Для этого надо yield*
function* generateArr() {
  yield* [1, 2, 3];
}

function* generator() {
  yield 42;
  yield* generateArr();    // [1, 2, 3] заменили на еще один генератор, который сгенерирует этот массив
  yield 3;
}