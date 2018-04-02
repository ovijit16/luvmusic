module.exports = function (app) {
    
    var player = require('./../controllers/player.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');
    var music = require('./../controllers/music.server.controller.js');

    app.route('/browse').get(users.requiresLogin, player.browseMusic);      //  /browse
    app.route('/browse/songs').get(users.requiresLogin, player.music);      //  /browse/songs
    app.route('/details').get(users.requiresLogin, player.details);         //  /details
    app.route('/edit').get(users.requiresLogin, player.edit);               //  /edit
    app.route('/browse/search').get(users.requiresLogin, player.search);    //  /search
    app.route('/setting').get(users.requiresLogin, player.setting);         //  /setting   
    app.route('/profile').get(users.requiresLogin, player.profile);         //  /profile

    app.route('/music').get(users.requiresLogin, music.home);    // music
    app.route('/dropbox/auth').get(music.dropboxauth);    // dropbox auth
    app.route('/oauthredirect').get(music.oauthredirect);
}
