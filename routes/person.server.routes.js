'use strict';

module.exports = function(app) {

	// Root routing
	var persons = require('./../controllers/persons.server.controller.js');
    var users = require('./../controllers/users.server.controller.js');

    app.route('/api/persons')
        .get(persons.list)
        .post(users.requiresLogin, persons.create);

    app.route('/api/persons/:personId')
        .get(persons.read)
        .delete(users.requiresLogin, persons.delete);

    app.route('/api/persons/edit/:personId')
        .get(persons.read)
        .put(users.requiresLogin, persons.update);

    
    app.route('/setting').get(persons.setting);             //  /setting   
    app.route('/profile/:personId').get(persons.profile);   //  /profile

    // app.route('/all').get(persons.listView);
    // app.route('/:contactId').get(persons.singleView);

    app.param('personId', persons.personByID);
};
