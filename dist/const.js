"use strict";

var MATH = {
  PI: 3.14159
};

/*Менять само значение const, как в данном примере, нельзя. А вот его свойство, как ниже, можно.
MATH = {
  PI:3.15
};*/

MATH.PI = 3.15;
console.log(MATH.PI);