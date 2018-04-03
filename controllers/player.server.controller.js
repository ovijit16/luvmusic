var mongoose = require('mongoose');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

const
crypto = require('crypto');
config = require('./../dropbox_config.js');
NodeCache = require( "node-cache" );
rp = require('request-promise');
var mycache = new NodeCache();


// browse page
module.exports.browseMusic = function(req, res) {
	res.render('./../public/views/player/browse.ejs', {
		user: req.user || null,
		request: req
	});
};

// songs list
module.exports.music = function(req, res) {
	res.render('./../public/views/player/songs.ejs', {
		user: req.user || null,
		request: req
	});
};


// details page
module.exports.details = function(req, res) {
	res.render('./../public/views/player/details.ejs', {
		user: req.user || null,
		request: req
	});
};

// edit page
module.exports.edit = function(req, res) {
	res.render('./../public/views/player/edit.ejs', {
		user: req.user || null,
		request: req
	});
};

// search page
module.exports.search = function(req, res) {
	res.render('./../public/views/player/search.ejs', {
		user: req.user || null,
		request: req
	});
};

// setting page
module.exports.setting = function(req, res) {

    let token = mycache.get("aTempTokenKey");
	let paths = fileUpload(token);
	res.render('./../public/views/player/setting.ejs', {
		user: req.user || null,
		request: req,
		photos: paths
	});
};

// profile page
module.exports.profile = function(req, res) {
	res.render('./../public/views/player/profile.ejs', {
		user: req.user || null,
		request: req
	});
};

// dropbox file upload
function fileUpload(token, filename) {
	var options = {
		url: config.DBX_CONTENT_DOMAIN + config.DBX_FILE_UPLOAD,
		mathod: 'POST',
		header: {
			'Authorization': "Bearer " + token,
			'Content-Type': 'application/octet-stream',
			'Dropbox-API-Arg': {
				path: '/' + filename,
				mode: 'add',
				autorename: true,
				mute: false
			}
		}
	}

	return filename;
};