$.ajax({
  url: 'https://api.imgur.com/3/album/ixiv0.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 3efaec9ffe12e73'
  }
})

.done(function(res) {
  console.log("Images were properly loaded.")
})

.fail(function(err) {
  console.log("Images were not properly loaded.");
});
