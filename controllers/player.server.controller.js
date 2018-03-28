var mongoose = require('mongoose');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');


// browse page
module.exports.browseMusic = function(req, res)
{
	res.render('./../public/views/player/browse.ejs', {
		user: req.user || null,
		request: req
	});
};

// songs list
module.exports.music = function(req, res)
{
	res.render('./../public/views/player/songs.ejs', {
		user: req.user || null,
		request: req
	});
};

// profile page
// module.exports.profile = function(req, res)
// {
// 	res.render('./../public/views/player/profile.ejs', {
// 		user: req.user || null,
// 		request: req
// 	});
// };

// details page
module.exports.details = function(req, res)
{
	res.render('./../public/views/player/details.ejs', {
		user: req.user || null,
		request: req
	});
};

// edit page
module.exports.edit = function(req, res)
{
	res.render('./../public/views/player/edit.ejs', {
		user: req.user || null,
		request: req
	});
};

// search page
module.exports.search = function(req, res)
{
	res.render('./../public/views/player/search.ejs', {
		user: req.user || null,
		request: req
	});
};

// setting page
// module.exports.setting = function(req, res)
// {
// 	res.render('./../public/views/player/setting.ejs', {
// 		user: req.user || null,
// 		request: req
// 	});
// };