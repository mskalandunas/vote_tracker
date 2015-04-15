// Cat obj array
var catArr = [];
// Cat total votes array
var catTotal = [];

// Cat constructor
var Cat = function(pic, total) {
  this.pic = pic;
  this.total = total;

  catArr.push(pic);
  catTotal.push(total);
}

// Creates cat objects
var Cat01 = new Cat('img/01.jpg', 1); //test values
var Cat02 = new Cat('img/02.jpg', 2);
var Cat03 = new Cat('img/03.jpg', 3);
var Cat04 = new Cat('img/04.jpg', 4);
var Cat05 = new Cat('img/05.jpg', 5);
var Cat06 = new Cat('img/06.jpg', 6);
var Cat07 = new Cat('img/07.jpg', 7);
var Cat08 = new Cat('img/08.jpg', 8);
var Cat09 = new Cat('img/09.jpg', 9);
var Cat10 = new Cat('img/10.jpg', 10);
var Cat11 = new Cat('img/11.jpg', 11);
var Cat12 = new Cat('img/12.jpg', 12);
var Cat13 = new Cat('img/13.jpg', 13);
var Cat14 = new Cat('img/14.jpg', 14);

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

catPic1();
catPic2();

console.log(Cat01);
console.log(Cat01.total);
console.log(Cat02.total);
console.log(catTotal);

// Add vote
// var addVote = function() {
//   document.getElementById('pic-container-1').innerHTML = 'TEST TEXT';
// }

// Polar area chart
var polarData = [
  {
    value: Cat01.total,
    color: "#878BB6"
  },
  {
    value: Cat02.total,
    color: "#4ACAB4"
  },
  {
    value: Cat03.total,
    color: "#8ce8cc"
  },
  {
    value: Cat04.total,
    color: "#8DFFFF"
  },
  {
    value: Cat05.total,
    color: "#FF66A3"
  },
  {
    value: Cat06.total,
    color: "#66FF99"
  },
  {
    value: Cat07.total,
    color: "#85A3FF"
  },
  {
    value: Cat08.total,
    color: "#DBDB4D"
  },
  {
    value: Cat09.total,
    color: "#66FFCC"
  },
  {
    value: Cat10.total,
    color: "#FF99CC"
  },
  {
    value: Cat11.total,
    color: "#FF3333"
  },
  {
    value: Cat12.total,
    color: "#9999FF"
  },
  {
    value: Cat13.total,
    color: "#FF6600"
  },
  {
    value: Cat14.total,
    color: "#FFCC99"
  }
];

var polarOptions = {
  segmentShowStroke : false,
  animateScale : true
}

var favoriteCat = document.getElementById("favoriteCat").getContext("2d");
new Chart(favoriteCat).PolarArea(polarData, polarOptions);
//polar end
