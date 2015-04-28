var Cat = function(pic, total, segment) {
  this.pic = pic;
  this.total = total;
  this.segment = segment;
}

$.ajax({
  url: 'https://api.imgur.com/3/album/ixiv0.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 3efaec9ffe12e73'
  }
})

var Cat01 = new Cat("http://i.imgur.com/uY69UMa.jpg", 0, 0);
var Cat02 = new Cat("http://i.imgur.com/6EMjPNy.jpg", 0, 1);
var Cat03 = new Cat("http://i.imgur.com/o3aiDEA.jpg", 0, 2);
var Cat04 = new Cat("http://i.imgur.com/480j15J.jpg", 0, 3);
var Cat05 = new Cat("http://i.imgur.com/Fk5LMcS.jpg", 0, 4);
var Cat06 = new Cat("http://i.imgur.com/nAXyJeA.jpg", 0, 5);
var Cat07 = new Cat("http://i.imgur.com/1rNSoGl.jpg", 0, 6);
var Cat08 = new Cat("http://i.imgur.com/3aVuxrU.jpg", 0, 7);
var Cat09 = new Cat("http://i.imgur.com/Je4GkEP.jpg", 0, 8);
var Cat10 = new Cat("http://i.imgur.com/16aiT5U.jpg", 0, 9);
var Cat11 = new Cat("http://i.imgur.com/K530RRk.jpg", 0, 10);
var Cat12 = new Cat("http://i.imgur.com/4LrtDm4.jpg", 0, 11);
var Cat13 = new Cat("http://i.imgur.com/bObzoC6.jpg", 0, 12);
var Cat14 = new Cat("http://i.imgur.com/umD0ISC.jpg", 0, 13);

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

shuffle(catArr);

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

var addVoteOne = function() {
  catArr[0].total += 1;
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
