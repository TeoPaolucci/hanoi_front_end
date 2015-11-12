$(document).ready(function(){
  $('#create').on('submit', function(e){
    var game = wrap('game', form2object(this));
    hanoiApi.createGame(userToken, game, callback);
    e.preventDefault();
  });
});
