function letter(){
  var letter = document.getElementById('letter')
  letter.classList.remove( 'invisible' );
  letter.classList.remove( 'bang' );
  letter.classList.add( 'tada' );
}
function letterClose(){
  var letter = document.getElementById('letter')
  letter.classList.remove( 'tada' );
  letter.classList.add( 'bang' );
  setTimeout(function(){  letter.classList.add( 'invisible' );},1000)
}
