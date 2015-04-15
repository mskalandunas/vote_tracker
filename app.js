//cat obj array
var catArr = [];
//cat votes array
var catTotal = [];

// Cat Constructor
var cat = function(pic, total) {
  this.pic = pic;
  this.total = total;

  catArr.push(pic);
  catTotal.push(total);
}

var cat01 = new cat('img/01.jpg', 0);
var cat02 = new cat('img/02.jpg', 0);
var cat03 = new cat('img/03.jpg', 0);
var cat04 = new cat('img/04.jpg', 0);
var cat05 = new cat('img/05.jpg', 0);
var cat06 = new cat('img/06.jpg', 0);
var cat07 = new cat('img/07.jpg', 0);
var cat08 = new cat('img/08.jpg', 0);
var cat09 = new cat('img/09.jpg', 0);
var cat10 = new cat('img/10.jpg', 0);
var cat11 = new cat('img/11.jpg', 0);
var cat12 = new cat('img/12.jpg', 0);
var cat13 = new cat('img/13.jpg', 0);
var cat14 = new cat('img/14.jpg', 0);

console.log(catArr);

// Shuffles order of cat pic array (Knuth shuffle)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log(catArr);
shuffle(catArr);

// Appends cat pic to body element
function catPic1() {
  var img = document.createElement('img');
  img.src = catArr[0]
  document.getElementById('pic-container-1').appendChild(img);
}

function catPic2() {
  var img = document.createElement('img');
  img.src = catArr[1]
  document.getElementById('pic-container-2').appendChild(img);
}

catPic1()
catPic2()

// //listener for click
// var myFunc = function() {
//   document.getElementById('pic-container-1').innerHTML = 'TEST TEXT';
// }



// //Vote Listener

// //Pie chart shell
// var polarData = [
//   {
//     value: 6,
//     color: "#878BB6"
//   },
//   {
//     value: 14,
//     color: "#4ACAB4"
//   },
//   {
//     value: 15,
//     color: "#8ce8cc"
//   },
//   {
//     value: 4,
//     color: "#8DFFFF"
//   },
//   {
//     value: 11,
//     color: "#FF66A3"
//   },
//   {
//     value: 5,
//     color: "#66FF99"
//   },
//   {
//     value: 6,
//     color: "#85A3FF"
//   },
//   {
//     value: 2,
//     color: "#DBDB4D"
//   },
//   {
//     value: 11,
//     color: "#66FFCC"
//   },
//   {
//     value: 9,
//     color: "#FF99CC"
//   },
//   {
//     value: 8,
//     color: "#FF3333"
//   },
//   {
//     value: 4,
//     color: "#9999FF"
//   },
//   {
//     value: 13,
//     color: "#FF6600"
//   },
//   {
//     value: 6,
//     color: "#FFCC99"
//   }
// ];

// var polarOptions = {
//   segmentShowStroke : false,
//   animateScale : true
// }

// var favoriteCat = document.getElementById("favoriteCat").getContext("2d");
// new Chart(favoriteCat).PolarArea(polarData, polarOptions);
// //Pie end
