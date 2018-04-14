module.exports = function (app) {
    
    var player = require('./../controllers/player.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');
    var song = require('./../controllers/songs.server.controller.js');

    app.route('/browse').get(users.requiresLogin, player.browseMusic);      //  /browse
    app.route('/setting').get(users.requiresLogin, player.setting);         //  /setting   
    app.route('/profile').get(users.requiresLogin, player.profile);         //  /profile
    app.route('/browse/faq').get(users.requiresLogin, player.faq);         //  /faq

    app.route('/dropbox/auth').get(song.dropboxauth);    // dropbox auth
    app.route('/oauthredirect').get(song.oauthredirect);
    
    
    app.post('/users/:userId', player.uploadPhoto, users.updatePhoto);
}
