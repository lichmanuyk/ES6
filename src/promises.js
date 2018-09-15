//ES5 - приходилось в аргументах к функции отправлять еще 2 функции обратного вызова(одна на случай успеха, одна на неудачу. Все это превращалось в путаницу кода)
// function applyForVisa(documents, resolve, reject) {
//   console.log('Обработка заявления...');
//   setTimeout(function() {
//     Math.random() > .5 ? resolve({}) : reject('В визе отказано: не хватило документов');
//   }, 2000)};
// function bookHotel() {}
// function buyTickets() {}

// applyForVisa({}, 
//   function(visa) {
//     console.info('Виза получена');
//     bookHotel(visa, 
//       function(reservation) {
//         buyTickets(reservation, 
//           function() {}, 
//           function(error) {})
//       }, 
//       function(error) {})
//   },
//   function(reason) {
//     console.error(reason);
//   }
// );

//ES6
function applyForVisa(documents) {
  let promise = new Promise(function(resolve, reject) {
    console.log('Обработка заявления...');
    setTimeout(function () {
      Math.random() > 0.5 ? resolve({}) : reject('В визе отказано: не хватило документов');
    }, 2000)
  })
  return promise;
};
function getVisa(visa) {
  console.info('Виза получена');
  return new Promise(function(resolve, refect) {
    setTimeout(() => resolve(visa), 2000);
  });
}
function bookHotel(visa) {
  console.log(visa);
  console.log('Бронируем отель');
  return Promise.resolve({});   //Можно мгновенно выполнить обещание
  //return Promise.reject('');      Или мгновенно отклонить обещание
};
function buyTickets(booking) {
  console.log('Покупаем билеты');
  console.log('Бронь ', booking);
}

applyForVisa({})
  .then(getVisa)
  .then(bookHotel)
  .then(buyTickets)
  .catch(error => console.error(error))
  .then(() => console.log('Я еще тут'));
