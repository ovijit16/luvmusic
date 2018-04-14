var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = {

    title: {
        type: String,
        default: 'Unknown',
        trim: true
    },

    artist: {
        type: String,
        default: 'Unknown',
        trim: true
    },

    year: {
        type: String,
        default: 'Unknown',
    },

    genre: {
        type: String,
        default: 'Unknown',
        trim: true
    },

    album: {
        type: String,
        default: 'Unknown',
        trim: true
    },

    src: {
        type: String,
        trim: true,
        required: 'Please select a valid music file!'
    }
}

var Song = mongoose.model('Song', SongSchema, 'songs');
module.exports = Song;