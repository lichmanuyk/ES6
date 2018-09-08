function greet(name) {
  console.log(`Hello ${name}`.toUpperCase());
}
greet('Bill');


function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `);
}
createEmail('john@gmail.com', 'piter@gmail.com', 'Встреча одноклассников', 'Привет, Джон. Приходи во вторник на встречу к 9 часам в наше кафе.');


function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x)+parseInt(y)}`);
}
add('5','7');


let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}