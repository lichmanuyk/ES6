# ES6
Learning ES6

5. Let - видна только в блоке, в котором создана. И ее нельзя использовать раньше, чем она появляется в коде. Let можно использовать в цикле, где i в каждом цикле присваивается номер цикла. Тогда i в конце цикла имела не конечное значение, а в каждом случае свое. 

6. Const - может быть объявлена только один раз, иначе произойдет ошибка. Имя должно быть большими буквами.Const так же, как и let не может использоваться до объявления. Если значение const это объект, то мы можем менять его св-ва, но никак не сам объект.

    Если мы уверены, что переменная не поменяется - используем const. Иначе let.

7. Оператор разворота(spread) ... - "разворачивает" массив так, что мы можем использовать массив элементов там, где можно использоваться только элементы по-отдельности. Например в функцию с тремя аргументами мы можем передать не 3 аргумента, а развернутый массив, содержащий 3 значения. Или можно конкатенировать массивы, добавляя развернутое название одного массива вовнутрь другого.

8. Шаблонные строки(templates) - `Привет, ${name}`, где name это переменная, вместо которой будет использоваться ее значение. Шаблонные строки имеют тип string, так что к ним можно применять все соответствующие методы, например toUpperCase(). Также они поддерживают многострочность, запоминая все табы, переносы строк и т.д. В заполнителях шаблона можно использовать математические выражения или вызывать функции(методы), например parseInt(). Еще шаблонные строки можно обрабатывать функциями, аргументами которых является массив literals, содержащий куски текста между переменными, и value - сама переменная. Если value будет не одна, тогда применяется разворот ...values. 

9. Параметры функции(parameters). В параметрах функции можно легко задать значение по-умолчанию через равно: func(name = 'Bill', age = 23). Также можно пользоваться синтаксисом оставшихся параметров, который берет отдельные параметры и "сворачивает" их в массив(именно Array, в отличии от arguments в ES5), в отличии от  разворота, который действует наоборот.Это может быть полезно когда мы не знаем, сколько точно параметров будет при вызове функции - тогда в параметрах функции будет ...values.

10. Циклs for...of/for...in. Оба цикла используются для перебора коллекций. Различия лишь в том, что for...of при итерациях использует значение, а for...in - ключ. 

11. Объекты(objects). При создании объектов, если название св-ва совпадает с названием уже объявленных переменных, явно указывать, что они являются ключами этих свойств не нужно - значения подставятся автоматически из одноименных переменных. Также при указании метода объекта больше не нужно ставить двоеточие и писать слово function - остается только название метода со скобками и тело самой функции. Еще для того, чтобы указать объекту геттер и сеттер, все делается точно так же, как и с присваиванием метода, только перед его названием добавляется слово get или set.

12. Классы(classes). Свойства будущего объекта в классе указываются ТОЛЬКО в constructor. Методы указываются уже рядом с constructor, точно так же, как и в разделе 11, который рассматривался выше.
Статические св-ва(т.е. св-ва, которые принадлежат не будущим объектам, а самому классу, который их создает, и выполняют вспомогательную функцию), присваиваются не в теле самого класса, а через точку, например "Task.count = 0;". Статические методы(т.е. методы, принадлежащие не будущим объектам, а самому классу) объявляются в теле самого класса, как и обычные методы, только с приставкой "static" в самом начале. Геттеры и сеттеры для будущих объектов в классах указываются так же, как и методы для них, и точно так же, как и в разделе 11 выше. Разве что одноименные им свойства, с которыми эти геттеры и сеттеры взаимодействуют, следует называть с нижнего подчеркивания, тем самым дав понять, что эти свойства приватные и обращаться к ним напрямую не следует, так как для этого и имеются геттер и сеттер.

12. Классы(Дополнение). Классами в ES6 нельзя пользоваться ДО их объявления(не всплывают, как и let с const), как это можно было делать в ES5. Также классы в ES6 не засоряют глобальный объект, то есть window. Также классы, как и функции в ES5 можно объявлять как просто среди всего кода, так и присваивая его в переменную, например let Task = class {...};

13. Наследование(inheritance). Для того, чтобы указать наследование одного класса к другому, нужно подклассу после его имени добавить "extends названиеСуперКласса". Если у подкласса нету своего конструктора, он будет использовать конструктор суперкласса. Если же подклассу мы указываем свой конструктор, то в нем первой строчкой должен идти вызов конструктора родителя командой super();, после которого уже присваиваются все остальные свойства. Методы, геттеры и сеттеры суперкласса также наследуются подклассу. Но если нас полностью не устраивает какой-то метод суперкласса, мы можем перезаписать его с таким же именем в теле подкласса и тогда будет использоваться новый. Если же нам нужно только ДОПОЛНИТЬ метод суперкласса, то при переназначении его у подкласса, первым делом мы вызовем метод суперкласса командой super.complete();, а после этого уже дополним код нужными командами. Статические  методы и свойства суперклассов также без проблем наследуются подклассам.