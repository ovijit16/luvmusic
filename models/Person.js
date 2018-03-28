var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = {
   
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'Your name required' 
    },

    username: {
        type: String,
        trim: true,
        required: 'Your username required'
    },
    
    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Your email required'
    },
    
    city: {
        type: String,
        trim: true,
        default: '',
        required: 'Your city required'
    },

    country: {
        type: String,
        trim: true,
        default: '',
        required: 'Your country required'
    },

    photo: {
        type: String,
        trim: true,
        default: ''
    }
    
}

var Person = mongoose.model('Person', PersonSchema, 'persons');
module.exports = Person;