//ES5
// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

//ES6
let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

//Проигнорировали элемент массива + одной переменной не хватило значение, так что она undefined.
let scores = [3, 4, 5]; 
// let [low, , high, higher] = scores;

//Синтаксис оставшихся параметров, преобразованных в массив
// let [low, ...rest] = scores;

//Переменная по умолчанию
// let [low, mid, high = 5] = [3, 4];

//Вложенные массивы в деструктировании
// let [low, mid, [high, higher]] = [3, 4, [5, 6]];

//Деструктирование параметров функции
function computeScore([low, mid]) {
  console.log(low, mid);
}
computeScore([3, 4]);

//Деструктирование результатов функции
function getScores2() {
  return [3,4,5];
}
let [low, mid, high] = getScores2(); //Деструктировали полученный массив в переменные

//Обменяли значения переменных
let yes = 'Yes';
let no = 'No';
[yes, no] = [no, yes];
console.log(yes, no);