$(document).ready(function(){
  $('#create').on('submit', function(e){
    var record = wrap('game', form2object(this));
    hanoiApi.createGame(userToken, record, callback);
    e.preventDefault();
  });

  $('#show-game').on('submit', function(e){
    var id = $('#show-id').val();
    e.preventDefault();
    hanoiApi.showGame(id, userToken, callback);
  });

  $('#updateGame').on('submit', function(e){
    var id = $('#update-id').val();
    var record = wrap('game', form2object(this));
    delete record.game['update-id'];
    e.preventDefault();
    hanoiApi.updateGame(id, userToken, record, callback);
  });

  $('#delete-game').on('submit', function(e){
    var id = $('#delete-id').val();
    e.preventDefault();
    hanoiApi.deleteGame(id, userToken, callback);
  });

  $('#show-stats').on('click', function() {
    $('#stat-box').html('');
    hanoiApi.allUserGames(userToken, function(err, data) {
      console.log(data);
      if(err) {
        console.error(err);
        return;
      }
      var context = {};
      var filtered5Dgames = data.games.filter(function(game) {
        if(game.discs === 5) {
          return true;
        }
        return false;
      });
      var sorted5Dgames = filtered5Dgames.sort(function(a, b) {
        return a.time - b.time;
      });
      context.games = sorted5Dgames;

      var sum5Dtime = filtered5Dgames.reduce(function(total, current) {
        return total + current.time;
      }, 0);
      context.average5Dtime = sum5Dtime / filtered5Dgames.length;

      context.perfect5Dcount = filtered5Dgames.reduce(function(total, current) {
        if(current.moves === 31) {
          return total + 1;
        }
        return total;
      }, 0);

      context.perfect5Dpercent = Math.round((context.perfect5Dcount / filtered5Dgames.length) * 100);

      var html = userDataTemplate(context);
      $('#stat-box').html(html);
    });
  });
});
