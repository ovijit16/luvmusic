'use strict';

/**
 * Module dependencies.
 */
module.exports.index = function(req, res) {

	if(req.user != undefined) {
		// return res.redirect(backURL);
		// return req.headers.referer;
		return res.redirect('/browse');
	}
	
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});

};

module.exports.about = function(req, res) {

	if(req.user != undefined) {
		// return res.redirect(req.get('referer'));
		// return res.redirect('referer');
		return res.redirect('/browse');
	}
	
	res.render('./../public/views/about.ejs', {
		user: req.user || null,
		request: req
	});

};

module.exports.contact = function(req, res) {

	if(req.user != undefined) {
		// return res.redirect(req.get('referer'));
		// return res.redirect('referer');
		return res.redirect('/browse');
	}
	
	res.render('./../public/views/contact.ejs', {
		user: req.user || null,
		request: req
	});
	
};