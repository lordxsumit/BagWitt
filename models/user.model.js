const mongoose = require('mongoose')

mongoose.connect('mongodb:/127.0.0.1:27017/Bagwitt')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    image: String
})

module.exports = mongoose.model('user', userSchema)