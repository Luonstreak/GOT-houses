function spacing(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(" " + '"' + arr[i] + '"');
  }
  return newArr;
}

function getHouse(i){
  if(i == 1){
    $.get('https://anapioficeandfire.com/api/houses/362', {type:'post'}, function(res){
      $('.details p:nth-child(1)').text('Name: ' + '"' + res.name + '"');
      $('.details p:nth-child(2)').text('Words: ' + '"' + res.words + '"');
      $('.details p:nth-child(3)').text('Titles: ' + spacing(res.titles));
      $('.details').css('color', 'rgba(35%, 35%, 35%, .8)');
      console.log(res);
    },'json');
  }
  if(i == 2){
    $.get('https://anapioficeandfire.com/api/houses/378', {type:'post'}, function(res){
      $('.details p:nth-child(1)').text('Name: ' + '"' + res.name + '"');
      $('.details p:nth-child(2)').text('Words: ' + '"' + res.words + '"');
      $('.details p:nth-child(3)').text('Titles: ' + spacing(res.titles));
      $('.details').css('color', 'rgba(63%, 15%, 15%, .8)');
      console.log(res);
    },'json');
  }
  if(i == 3){
    $.get('https://anapioficeandfire.com/api/houses/230', {type:'post'}, function(res){
      $('.details p:nth-child(1)').text('Name: ' + '"' + res.name + '"');
      $('.details p:nth-child(2)').text('Words: ' + '"A Lannister always pays his debts"');
      $('.details p:nth-child(3)').text('Titles: ' + spacing(res.titles));
      $('.details').css('color', 'rgba(77%, 25%, 27%, .8)');
      console.log(res);
    },'json');
  }
  if(i == 4){ 
    $.get('https://anapioficeandfire.com/api/houses/15', {type:'post'}, function(res){
      $('.details p:nth-child(1)').text('Name: ' + '"' + res.name + '"');
      $('.details p:nth-child(2)').text('Words: ' + '"The Night Is Dark and Full of Terrors"');
      $('.details p:nth-child(3)').text('Titles: ' + spacing(res.titles)); 
      $('.details').css('color', 'rgba(42%, 25%, 19%, .8)');
      console.log(res);
    },'json');
  }
}

$(document).ready(function() {
  $(document).on('click', 'img', function(i){
    $('.details').hide();
    getHouse($(this).attr('id'));
    $('.details p').css('margin', '50px 0');
    $('.details').fadeIn(500);
  })
}); // ready
