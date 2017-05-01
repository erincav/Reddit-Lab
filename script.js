$(document).ready(function(){

$.get('https://www.reddit.com/r/TakeUsOnAJourney/.json').done(function(response){
// console.log(response.data.children[0].data);


for(var i=0; i<response.data.children.length; i++){
  if (response.data.children[i].data.thumbnail !== 'self'){
    var thumbnail = response.data.children[i].data.thumbnail;
    var title = response.data.children[i].data.title;
    var author =response.data.children[i].data.author;
  console.log(thumbnail + title + author);

// Shows photos
 $('.masonry').append('<div class="item"><img id="masonryImg" src="' + thumbnail +'"><hr><h3>'+ title + '</h3><hr><p><em> - ' + author + '</em></p></div>');

};// each function

};

// $('div.item').append('<div class="overlay"><div class="text">Hello World</div></div>');
// Banner - Picture Comparison Plug-in

document.querySelectorAll('.cocoen').forEach(function(element){
  new Cocoen(element);
});

});// .get closing


// QUOTE DIV

$.get('https://www.reddit.com/r/quotes/.json').done(function(response){
  var x=(Math.floor(Math.random() * 24));
  var randomQuote = response.data.children[x].data.title;
    console.log(randomQuote);

    $('.quoteDiv').append('<h2>' +  randomQuote +  '</h2>');
});




});
