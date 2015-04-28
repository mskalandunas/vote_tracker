$(document).ready(function() {
  $('#header').append('<h3>You must decide!!!</h3>');
  $('h3').mouseenter(function() {
    $('h3').fadeTo('slow', 0.50);
  });
  $('h3').mouseleave(function() {
    $('h3').fadeTo('slow', 1);
  });
});

