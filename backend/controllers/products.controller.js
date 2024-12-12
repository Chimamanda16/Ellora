const Product = require("../models/product.model");

//Generate unique id for product
function generateSimpleId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  
//Save product to db
async function saveProduct(res, name, price, file){
    const newProduct = new Product({
        imgUrl: file.path,
        productName: name,
        productPrice: price,
        productId: generateSimpleId(),
    });
    await newProduct.save();
    res.status(200).json({ message: 'Image uploaded successfully', url: file });
}

//Get Images from db
function getProducts(res){
  Product.find({}).then((result) =>{
    res.status(200).json({gallery: result});
  });
}

module.exports = {saveProduct, getProducts};