const Product = require("../models/product.model");

module.exports  = async function saveProduct(res, name, price, file){
    // Save metadata to MongoDB
    const newProduct = new Product({
        imgUrl: file.path,
        productName: name,
        productPrice: price,
        productId: "1a",
    });
    await newProduct.save();
    res.status(200).json({ message: 'Image uploaded successfully', url: file });
}