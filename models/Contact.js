var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var date = new Date("YYYY-MM-DD");

var ContactSchema = {
   
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'You name required' 
    },

    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Your email required'
    },
    
    subject: {
        type: String,
        trim: true,
        default: '',
    },
    
    created: {
        type: Date,
        default: Date.now,
    },

    message: {
        type: String,
        trim: true,
        default: '',
        required: 'Your message required'
    }
    
}

var Contact = mongoose.model('Contact', ContactSchema, 'contacts');
module.exports = Contact;