"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(generateArr),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(generator);

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
function generateArr() {
  return regeneratorRuntime.wrap(function generateArr$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield([1, 2, 3], "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return 42;

        case 2:
          return _context2.delegateYield(generateArr(), "t0", 3);

        case 3:
          _context2.next = 5;
          return 3;

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}