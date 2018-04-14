require('dotenv').config({silent: true});

/**
 * Load Dropbox API
 */
module.exports = {
	DBX_API_DOMAIN: 'https://api.dropboxapi.com',
	DBX_OAUTH_DOMAIN: 'https://www.dropbox.com',
	DBX_OAUTH_PATH: '/oauth2/authorize',
	DBX_TOKEN_PATH: '/oauth2/token',
	DBX_APP_KEY: 'ol1x6ldl1bo9a0v',
	DBX_APP_SECRET: '7lblr3sffbn8f77', 
	// OAUTH_REDIRECT_URL:"http://localhost:3000/oauthredirect",
	OAUTH_REDIRECT_URL:"https://luvmusic-shamahoque.c9users.io/oauthredirect",
	DBX_LIST_FOLDER_PATH:'/2/files/list_folder',
	DBX_LIST_FOLDER_CONTINUE_PATH:'/2/files/list_folder/continue',
	DBX_GET_TEMPORARY_LINK_PATH:'/2/files/get_temporary_link',

	// file upload
	DBX_CONTENT_DOMAIN: 'https://content.dropboxapi.com',
	DBX_UPLOAD_PATH: '/2/files/upload'
}
