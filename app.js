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

// Event listeners
// document.getElementById("pic-container-1").addEventListener("click", showInput);
// document.getElementById("pic-container-2").addEventListener("click", showInput);

//Pie chart shell

var pieData = [
  {
    value: 20,
    color:"#878BB6"
  },
  {
    value : 40,
    color : "#4ACAB4"
  },
  {
    value : 10,
    color : "#FF8153"
  },
  {
    value : 30,
    color : "#FFEA88"
  }
];

var pieOptions = {
  segmentShowStroke : false,
  animateScale : true
}

var favoriteCat = document.getElementById("favoriteCat").getContext("2d");
new Chart(favoriteCat).Pie(pieData, pieOptions);
