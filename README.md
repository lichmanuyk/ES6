# ES6
Learning ES6

5. Let - видна только в блоке, в котором создана. И ее нельзя использовать раньше, чем она появляется в коде. Let можно использовать в цикле, где i в каждом цикле присваивается номер цикла. Тогда i в конце цикла имела не конечное значение, а в каждом случае свое. 

6. Const - может быть объявлена только один раз, иначе произойдет ошибка. Имя должно быть большими буквами.Const так же, как и let не может использоваться до объявления. Если значение const это объект, то мы можем менять его св-ва, но никак не сам объект.

    Если мы уверены, что переменная не поменяется - используем const. Иначе let.

7. Оператор разворота(spread) ... - "разворачивает" массив так, что мы можем использовать массив элементов там, где можно использоваться только элементы по-отдельности. Например в функцию с тремя аргументами мы можем передать не 3 аргумента, а развернутый массив, содержащий 3 значения. Или можно конкатенировать массивы, добавляя развернутое название одного массива вовнутрь другого.

8. Шаблонные строки(templates) - `Привет, ${name}`, где name это переменная, вместо которой будет использоваться ее значение. Шаблонные строки имеют тип string, так что к ним можно применять все соответствующие методы, например toUpperCase(). Также они поддерживают многострочность, запоминая все табы, переносы строк и т.д. В заполнителях шаблона можно использовать математические выражения или вызывать функции(методы), например parseInt(). Еще шаблонные строки можно обрабатывать функциями, аргументами которых является массив literals, содержащий куски текста между переменными, и value - сама переменная. Если value будет не одна, тогда применяется разворот ...values. 

9. Параметры функции(parameters). В параметрах функции можно легко задать значение по-умолчанию через равно: func(name = 'Bill', age = 23). Также можно пользоваться синтаксисом оставшихся параметров, который берет отдельные параметры и "сворачивает" их в массив(именно Array, в отличии от arguments в ES5), в отличии от  разворота, который действует наоборот.Это может быть полезно когда мы не знаем, сколько точно параметров будет при вызове функции - тогда в параметрах функции будет ...values.