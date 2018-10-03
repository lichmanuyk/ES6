"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(range);

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
function range(start, end) {
  var current;
  return regeneratorRuntime.wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          current = start;

        case 1:
          if (!(current <= end)) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return current++;

        case 4:
          _context.next = 1;
          break;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = range(1, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }

  //Можно даже скопировать этот генератор как метод объекта
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

var numbers = {
  range: /*#__PURE__*/regeneratorRuntime.mark(function range(start, end) {
    var current;
    return regeneratorRuntime.wrap(function range$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            current = start;

          case 1:
            if (!(current <= end)) {
              _context2.next = 6;
              break;
            }

            _context2.next = 4;
            return current++;

          case 4:
            _context2.next = 1;
            break;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, range, this);
  })
};
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = numbers.range(1, 10)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _item = _step2.value;

    console.log(_item);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}