// (function($) {
  // $('#header').append('<h3>You must decide!</h3>');
// })();

// Cat constructor
var Cat = function(pic, total, segment) {
  this.pic = pic;
  this.total = total;
  this.segment = segment;
}

// Creates cat objects
var Cat01 = new Cat('img/01.jpg', 3, 0); //test values
var Cat02 = new Cat('img/02.jpg', 3, 1);
var Cat03 = new Cat('img/03.jpg', 3, 2);
var Cat04 = new Cat('img/04.jpg', 3, 3);
var Cat05 = new Cat('img/05.jpg', 3, 4);
var Cat06 = new Cat('img/06.jpg', 3, 5);
var Cat07 = new Cat('img/07.jpg', 3, 6);
var Cat08 = new Cat('img/08.jpg', 3, 7);
var Cat09 = new Cat('img/09.jpg', 3, 8);
var Cat10 = new Cat('img/10.jpg', 3, 9);
var Cat11 = new Cat('img/11.jpg', 3, 10);
var Cat12 = new Cat('img/12.jpg', 3, 11);
var Cat13 = new Cat('img/13.jpg', 3, 12);
var Cat14 = new Cat('img/14.jpg', 3, 13);

var catArr = [
  Cat01,
  Cat02,
  Cat03,
  Cat04,
  Cat05,
  Cat06,
  Cat07,
  Cat08,
  Cat09,
  Cat10,
  Cat11,
  Cat12,
  Cat13,
  Cat14
]

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
console.log(catArr);

// jQuery attempt
// $('#pic-container-1').append("<img src='carArr[0]'/>");

// Appends cat pic to body element
function catPic1() {
  var img = document.createElement('img');
  img.src = catArr[0].pic;
  document.getElementById('pic-container-1').appendChild(img);
}

function catPic2() {
  var img = document.createElement('img');
  img.src = catArr[1].pic;
  document.getElementById('pic-container-2').appendChild(img);
}

catPic1();
catPic2();

// Did it work?
console.log(catArr[0]);
console.log(catArr[1]);
console.log(catArr[0].segment);

// Add vote
var addVoteOne = function() {
  catArr[0].total += 1;
  // need to find a way to assign Cat objects to segments - new property segment
  myNewChart.segments[catArr[0].segment].value = catArr[0].total;
  shuffle(catArr);
  document.getElementById('pic-container-1').innerHTML = '<img src=' + catArr[0].pic; + '>'
  document.getElementById('pic-container-2').innerHTML = '<img src=' + catArr[1].pic; + '>'
  catPic1();
  catPic2();
  myNewChart.update();
}

var addVoteTwo = function() {
  catArr[1].total += 1;
  myNewChart.segments[catArr[1].segment].value = catArr[1].total;
  shuffle(catArr);
  document.getElementById('pic-container-1').innerHTML = '<img src=' + catArr[0].pic; + '>'
  document.getElementById('pic-container-2').innerHTML = '<img src=' + catArr[1].pic; + '>'
  catPic1();
  catPic2();
  myNewChart.update();
}

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
  segmentShowStroke: true,
  animateScale: true,
  animateRotate: false

}

var favoriteCat = document.getElementById("favoriteCat").getContext("2d");
var myNewChart = new Chart(favoriteCat).PolarArea(polarData, polarOptions);
console.log(myNewChart);
//polar end
