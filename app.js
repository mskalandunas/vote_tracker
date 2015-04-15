// (function($) {
//   $('#header').append('<h3>You must decide!</h3>');
// })();

// Cat obj array
var catArr = [];
// Cat total votes array
var catTotal = [];
// Cat photo name
var catName = [];

// Cat constructor
var Cat = function(pic, total, cat) {
  this.pic = pic;
  this.total = total;
  this.cat = cat;

  catArr.push(pic);
  catTotal.push(total);
  catName.push(cat);
}

// Creates cat objects
var Cat01 = new Cat('img/01.jpg', 11, 'Cat 01'); //test values
var Cat02 = new Cat('img/02.jpg', 3, 'Cat 02');
var Cat03 = new Cat('img/03.jpg', 13, 'Cat 03');
var Cat04 = new Cat('img/04.jpg', 11, 'Cat 04');
var Cat05 = new Cat('img/05.jpg', 14, 'Cat 05');
var Cat06 = new Cat('img/06.jpg', 6, 'Cat 06');
var Cat07 = new Cat('img/07.jpg', 10, 'Cat 07');
var Cat08 = new Cat('img/08.jpg', 8, 'Cat 08');
var Cat09 = new Cat('img/09.jpg', 9, 'Cat 09');
var Cat10 = new Cat('img/10.jpg', 12, 'Cat 10');
var Cat11 = new Cat('img/11.jpg', 13, 'Cat 11');
var Cat12 = new Cat('img/12.jpg', 2, 'Cat 12');
var Cat13 = new Cat('img/13.jpg', 4, 'Cat 13');
var Cat14 = new Cat('img/14.jpg', 5, 'Cat 14');

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

// jQuery attempt
// $('#pic-container-1').append("<img src='carArr[0]'/>");

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
console.log(catName);

// // Add vote
// var addVote = function() {
//   // document.getElementById('pic-container-1').innerHTML = 'TEST TEXT';
//   catArr.total + 1;
// }

// Polar area chart
var polarData = [
  {
    label: "Ribbon Cat",
    value: Cat01.total,
    color: "#878BB6"
  },
  {
    label: "Tiny Mole Cat",
    value: Cat02.total,
    color: "#4ACAB4"
  },
  {
    label: "Tree Cat",
    value: Cat03.total,
    color: "#8ce8cc"
  },
  {
    label: "Attack Cat!",
    value: Cat04.total,
    color: "#8DFFFF"
  },
  {
    label: "Finger Cat",
    value: Cat05.total,
    color: "#FF66A3"
  },
  {
    label: "Pile of Cats",
    value: Cat06.total,
    color: "#66FF99"
  },
  {
    label: "Shoe Cat",
    value: Cat07.total,
    color: "#85A3FF"
  },
  {
    label: "Boring Cat",
    value: Cat08.total,
    color: "#DBDB4D"
  },
  {
    label: "Sheet Cat",
    value: Cat09.total,
    color: "#66FFCC"
  },
  {
    label: "Ninja Cat",
    value: Cat10.total,
    color: "#FF99CC"
  },
  {
    label: "Cuddle Cat",
    value: Cat11.total,
    color: "#FF3333"
  },
  {
    label: "Stretching Cat",
    value: Cat12.total,
    color: "#9999FF"
  },
  {
    label: "Bag Cat",
    value: Cat13.total,
    color: "#FF6600"
  },
  {
    label: "Adorable Cat",
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
