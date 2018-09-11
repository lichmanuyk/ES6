'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//ES5
// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//ES6
var js = 'JavaScript',
    php = 'PHP',
    py = 'Python',
    rb = 'Ruby';

//Проигнорировали элемент массива + одной переменной не хватило значение, так что она undefined.

var scores = [3, 4, 5];
// let [low, , high, higher] = scores;

//Синтаксис оставшихся параметров, преобразованных в массив
// let [low, ...rest] = scores;

//Переменная по умолчанию
// let [low, mid, high = 5] = [3, 4];

//Вложенные массивы в деструктировании
// let [low, mid, [high, higher]] = [3, 4, [5, 6]];

//Деструктирование параметров функции
function computeScore(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      low = _ref2[0],
      mid = _ref2[1];

  console.log(low, mid);
}
computeScore([3, 4]);

//Деструктирование результатов функции
function getScores2() {
  return [3, 4, 5];
}

var _getScores = getScores2(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2]; //Деструктировали полученный массив в переменные

//Обменяли значения переменных


var yes = 'Yes';
var no = 'No';
var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];

console.log(yes, no);