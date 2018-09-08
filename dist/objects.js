'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log('Hi, my name is ' + firstName + ' ' + lastName);
  },

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName(value) {
    this.firstName = value;
  }
};

//ES5
// Object.defineProperty(person, 'fullName', {
//   get: function() {
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value) {
//     this.firstName = value;
//   }
// })

console.log(person);
// person.sayHello();

// person.firstName;
// person['firstName'];

// let property = 'firstName';
// person[property]; //person['firstName'];
// person = {
//   [property]: 'Bill'
// };

//ES6
// function createCar(property, value) {
//   return {
//     [property]: value,
//     ['_'+ property]: value,
//     [property.toUpperCase()]: value,
//     ['get' + property]() {
//       return this[property];
//     }
//   }
// }
// console.log(createCar('vin', 1));