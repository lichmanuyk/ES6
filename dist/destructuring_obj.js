'use strict';

var person = {
  firstName: 'John',
  lastName: 'Doe'
};

//ES5
// let firstname = person.firstName;
// let lastname = person.lastName;

//ES6
// let { firstName: first, lastName: last, age = 25 } = {firstName: 'John', lastName: 'Doe'};

//Вложенные объекты
var user = {
  firstName: 'John',
  lastName: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe'
  }
};
var first = user.firstName,
    last = user.lastName,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;

console.log(first, last, fb, age);

//Деструктирование параметров функции
function post(url, _ref) {
  var _ref$data = _ref.data,
      firstName = _ref$data.firstName,
      lastName = _ref$data.lastName,
      cache = _ref.cache;

  console.log(firstName, lastName, cache);
}
var result = post('api/users', { data: user, cache: false });

//Деструктирование результатов функции
function getUserInfo() {
  return {
    firstName: 'John',
    lastName: 'Doe',
    social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
    }
  };
};

var _getUserInfo = getUserInfo(),
    firstName = _getUserInfo.firstName,
    lastName = _getUserInfo.lastName,
    twitter = _getUserInfo.social.twitter;

console.log(firstName, lastName, twitter);