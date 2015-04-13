// Array of cat pics
var arr = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];

// Randomly selects a cat pic
// var rand = arr[Math.floor(Math.random() * arr.length)];
// console.log(rand);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return arr;
}

shuffle(arr);
// Appends cat pic to body element
// function catPic() {
//   var img = document.createElement('img');
//   img.src = arr[0]
//   document.body.appendChild(img);
//   var img2 = document.createElement('img2');
//   img2.src = arr[1]
//   document.body.appendChild(img2);
// }
// catPic()

var catPic = new Object();
catPic.img1 = arr[0];
catPic.img2 = arr[1];

catPic.post = function() {
  document.createElement('img');
  img.src = this.img1
}
