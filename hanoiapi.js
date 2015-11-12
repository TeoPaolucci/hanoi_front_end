var hanoiApi = {
  backend: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

  register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.backend + '/register',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function login(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.backend + '/login',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  allGames: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.backend + '/games',
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
      }, callback);
  },

  allUserGames: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.backend + '/user_games',
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json',
    }, callback);
  },

  createGame: function (token, info, callback) {
    this.ajax({
      method: 'POST',
      url: this.backend + '/games',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(info),
      dataType: 'json',
    }, callback);
  },

  showGame: function (id, token, callback) {
    this.ajax({
      method: 'GET',
      url: this.backend + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  },

  updateGame: function (id, token, info, callback) {
    this.ajax({
      method: 'PATCH',
      url: this.backend + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(info),
      dataType: 'json'
    }, callback);
  },

  deleteGame: function (id, token, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.backend + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  }
}
