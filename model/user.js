const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, index: {unique: true}},
    password: String,
    title: {
        type: String,
        default: 'noname'
    },
    description: {
        type: String,
        default: '……'
    }
});

module.exports = mongoose.model('User', UserSchema);