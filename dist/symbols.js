'use strict';

var _user;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Символы уникальны, не равны друг другу
// let symbol = Symbol('name');
// let symbol2 = Symbol('name');
// console.log(symbol);
// console.log(symbol2);
// console.log(symbol === symbol2);

//Метод for() - заносит символы в глобальный реестр, откуда их можно получить при создании одноименного
// let symbol = Symbol.for('name');
// let symbol2 = Symbol.for('name');
// console.log(symbol === symbol2);
// console.log(symbol);

//Метод keyFor() - можно получить имя символа
// let symbol = Symbol.for('name');
// let name = Symbol.keyFor(symbol);
// console.log(name);

//Как узнать, есть ли символ в объекте?
var password = Symbol();
var user = (_user = {
  username: 'r2d2'
}, _defineProperty(_user, password, 'c3po'), _defineProperty(_user, 'password', 'asdas'), _user);
// console.log(user.password); //undefined
// console.log(Object.keys(user)); //только username
// console.log(Object.getOwnPropertyNames(user)); //только username

//Метод for() сработает, но только если мы будем знать название символа и он в объекте также будет создан через for().
// let password = user[Symbol.for('password')];
// console.log(password);
//На помощь приходит новый метод Object.getOwnPropertySymbols() - помогает посмотреть символы у объекта
console.log(Object.getOwnPropertySymbols(user));