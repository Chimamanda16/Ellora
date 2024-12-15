let mongoose = require("mongoose");

// MongoDB Schema
const productSchema = new mongoose.Schema({
    imgUrl: String,
    productName: String,
    productPrice: String,
    productId: String,
});

module.exports = mongoose.model('Product', productSchema);