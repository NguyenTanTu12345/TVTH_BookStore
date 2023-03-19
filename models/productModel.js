const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        trim: true,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    public: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    images: {
        type: Object,
        required: true
    },

    category: {
        type: String,
        trim: true,
        required: true
    },
    
    checked: {
        type: Boolean,
        default: false
    },

    sold: {
        type: Number,
        default: 0
    }

})


module.exports = mongoose.model("Products",productSchema)