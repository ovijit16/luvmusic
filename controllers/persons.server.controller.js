var mongoose = require('mongoose');
var Person = require('./../models/Person.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

	//sending message
exports.setting = function(req, res) {
	res.render('./../public/views/player/setting.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.profile = function(req, res) {
	res.render('./../public/views/player/profile.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.list = function(req, res) {
  Person.find(function(err, data) {
    if (err) {
      return res.status(400).send({
  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var person = new Person(req.body);
  person.user = req.user;
  person.save(function(err, data) {
    if (err) {
      return res.status(400).send({
  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.person);
};


exports.delete = function(req, res) {
	var person = req.person;
	person.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(person);
		}
	});
};


module.exports.update = function(req, res) {
  var person = req.person;

  	person = _.extend(person, req.body);

  	person.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(person);
  		}
  	});
};

exports.personByID = function(req, res, next, id) {
	Person.findById(id).populate('user', 'email').exec(function(err, person) {
		if (err) return next(err);
		if (!person) return next(new Error('Failed to load message ' + id));
		req.person = person;
		next();
	});
};
