'use strict';

var movieList = document.getElementById('movies');

function addMovieToList(movie) {
  var img = document.createElement('img');
  img.src = movie.Poster;
  movieList.appendChild(img);
}

function getData(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var json = JSON.parse(xhr.response);
        resolve(json.Search);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function (error) {
      reject(error);
    };
    xhr.send();
  });
}

var search = 'batman';

// getData(`http://www.omdbapi.com/?apikey=22e7493b&s=${search}`)
//   .then(movies => 
//     movies.forEach(movie => addMovieToList(movie)))
//   .catch(error => console.error(error));


//Примеры других методов Promise
function go(num) {
  return new Promise(function (resolve, reject) {
    var delay = Math.ceil(Math.random() * 3000);
    console.log(num, delay);
    setTimeout(function () {
      if (delay > 2000) reject(num);else resolve(num);
    }, delay);
  });
}
var p1 = go(1);
var p2 = go(2);
var p3 = go(3);

// Promise.all([p2, p1, p3])
//   .then(value => console.log(value))
//   .catch(error => console.error(error));

// Promise.race([p2, p1, p3])
//   .then(value => console.log(value))
//   .catch(error => console.error(error));

//Используем Promise.race(), чтобы выяснить, кто окажется быстрее
var batman = getData('http://www.omdbapi.com/?apikey=22e7493b&s=batman');
var superman = getData('http://www.omdbapi.com/?apikey=22e7493b&s=superman');

// batman
//   .then(movies =>
//     movies.forEach(movie => addMovieToList(movie)))
//   .catch(error => console.error(error));
// superman
//   .then(movies =>
//     movies.forEach(movie => addMovieToList(movie)))
//   .catch(error => console.error(error));

Promise.race([batman, superman]).then(function (movies) {
  return movies.forEach(function (movie) {
    return addMovieToList(movie);
  });
}).catch(function (error) {
  return console.error(error);
});