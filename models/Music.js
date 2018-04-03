var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MusicSchema = {

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
        default: '',
        trim: true,
        required: 'Please select a valid music file!'
    }
}

var Music = mongoose.model('Music', MusicSchema, 'musics');
module.exports = Music;