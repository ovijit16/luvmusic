var mongoose = require('mongoose');
var Contact = require('./../models/Contact.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.singleView = function(req, res){
  res.render('./../public/views/player/contact/view.ejs', {
          user: req.user || null,
          request: req
        });
};

module.exports.listView = function(req, res) {
    Contact.find(function(err, data) {
      if (err) {
        return res.status(400).send({

          message: errorHandler.getErrorMessage(err)
        });
      }
      else {
        console.log("api called");

        res.render('./../public/views/player/contact/all.ejs', {
          user: req.user || null,
          request: req,
          messages: data
        });
      }
    });
};


module.exports.list = function(req, res) {
  Contact.find(function(err, data) {
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
  var contact = new Contact(req.body);
  contact.user = req.user;
  contact.save(function(err, data) {
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
  res.json(req.contact);
};


exports.delete = function(req, res) {
	var contact = req.contact;
	contact.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(contact);
		}
	});
};


module.exports.update = function(req, res) {
  var contact = req.contact;

  	contact = _.extend(contact, req.body);

  	contact.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(contact);
  		}
  	});
};

exports.contactByID = function(req, res, next, id) {
	Contact.findById(id).populate('user', 'email').exec(function(err, contact) {
		if (err) return next(err);
		if (!contact) return next(new Error('Failed to load message ' + id));
		req.contact = contact;
		next();
	});
};
