$(document).ready(function(){

  //this creates a card with the user input and stores the valuess
  var x = 0;
  var y = 0;
  $('button').click(function(){
    var first = $('#first').val();
    var last = $('#last').val();
    var text = $('#text').val();

    var front = '<div class="card" id="card'+x+'"><h1>'+first+' '+last+'</h1><p>click for description</p></div>';

    $('#cards').append(front);
    $('#card'+x+'').data('first-name',first);
    $('#card'+x+'').data('last-name',last);
    $('#card'+x+'').data('text',text);
    console.log($('#card'+x+'').data());
    x++;
    console.log('x is ' + x);


  });//end of button click function

  //this should switch the card div with a card back div that contains the description of that person
  $('.card').click(function(event){
    event.stopPropagation();
  });

  $('#cards').on('click','.card',function(){
    if (y%2===0){
      $(this).html('<p>'+$(this).data('text')+'</p>');
        y++
        console.log('y is' + y );
      }
      else if (y%2===1){
        // console.log($(this).data('first-name'));
        $(this).html('<h1>'+$(this).data('first-name')+" "+$(this).data('last-name')+'</h1><p>click for description</p>');
        y++
        console.log('y is now' + y );
      }
  })// end of card click function


});//end of document.ready function;
