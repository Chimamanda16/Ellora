let mongoose = require("mongoose");

// MongoDB Schema
const imageSchema = new mongoose.Schema({
    imgUrl: String,
    productName: String,
    productPrice: String,
    productId: Date,
});

module.exports = mongoose.model('Image', imageSchema);