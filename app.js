// Array of cat pics
var arr = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg'];

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

console.log(arr);
shuffle(arr);

// Appends cat pic to body element
function catPic1() {
  var img = document.createElement('img');
  img.src = arr[0]
  document.getElementById('pic-container-1').appendChild(img);
}

function catPic2() {
  var img = document.createElement('img');
  img.src = arr[1]
  document.getElementById('pic-container-2').appendChild(img);
}

catPic1()
catPic2()

//listener for click
var myFunc = function() {
  document.getElementById('pic-container-1').innerHTML = 'TEST TEXT';
}

//
//
// Cat Constructor
// var myArr = [];

// var photo = function(file, voteTotal) {
//   this.file = file;
//   this.voteTotal = voteTotal;

//   myArray.push(this.file);

// }
//
//
//

//Vote Listener

//Pie chart shell
var pieData = [
  {
    value: 6,
    color: "#878BB6"
  },
  {
    value: 14,
    color: "#4ACAB4"
  },
  {
    value: 15,
    color: "#8ce8cc"
  },
  {
    value: 4,
    color: "#8DFFFF"
  },
  {
    value: 11,
    color: "#FF66A3"
  },
  {
    value: 5,
    color: "#66FF99"
  },
  {
    value: 6,
    color: "#85A3FF"
  },
  {
    value: 2,
    color: "#DBDB4D"
  },
  {
    value: 11,
    color: "#66FFCC"
  },
  {
    value: 9,
    color: "#FF99CC"
  },
  {
    value: 8,
    color: "#FF3333"
  },
  {
    value: 4,
    color: "#9999FF"
  },
  {
    value: 13,
    color: "#FF6600"
  },
  {
    value: 6,
    color: "#FFCC99"
  }
];

var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

var favoriteCat = document.getElementById("favoriteCat").getContext("2d");
new Chart(favoriteCat).Pie(pieData, pieOptions);
//Pie end
