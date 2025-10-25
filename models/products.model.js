const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: {
        type: String,
        default: 0
    },
    panelcolor: {
        type: String,
        default: 0
    },
    textcolor: {
        type: String,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', productSchema)