$(document).ready(function(){
  //$('#grid .items').css("border", "1px solid gray");
  $('#grid').masonry({
    itemSelector        : '.items',
    columnWidth         : '.items',
    transitionDuration  : 0
  });
  
  
});