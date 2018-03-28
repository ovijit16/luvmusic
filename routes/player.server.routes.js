module.exports = function (app) {
    
    var player = require('./../controllers/player.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');

    app.route('/browse').get(player.browseMusic);   //  /browse
    app.route('/browse/songs').get(player.music);   //  /browse/songs
    // app.route('/profile').get(player.profile);      //  /profile
    app.route('/details').get(player.details);      //  /details
    app.route('/edit').get(player.edit);            //  /edit
    app.route('/browse/search').get(player.search); //  /search
    // app.route('/setting').get(player.setting);      //  /setting   
    
}
