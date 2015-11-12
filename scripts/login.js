userToken = '';

$(document).ready(function(){

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    hanoiApi.register(credentials, callback);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
      userToken = data.user.token;
      callback(null, data);
    };
    e.preventDefault();
    hanoiApi.login(credentials, cb);
  });
});
