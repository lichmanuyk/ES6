let person = {
  firstName: 'John',
  lastName: 'Doe'
};

//ES5
// let firstname = person.firstName;
// let lastname = person.lastName;

//ES6
// let { firstName: first, lastName: last, age = 25 } = {firstName: 'John', lastName: 'Doe'};

//Вложенные объекты
let user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe'
  }
}
let { firstName: first, lastName: last, social: {facebook: fb}, age = 25 } = user;
console.log(first, last, fb, age);

//Деструктирование параметров функции
function post(url, {data: {firstName, lastName}, cache}) {
 console.log(firstName, lastName, cache);
}
let result = post('api/users', {data: user, cache: false});

//Деструктирование результатов функции
function getUserInfo() {
  return {
    firstName: 'John',
    lastName: 'Doe',
    social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
  }
}};
let {firstName, lastName, social: {twitter}} = getUserInfo();
console.log(firstName, lastName, twitter);
