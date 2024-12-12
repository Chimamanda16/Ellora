const express = require('express');
const uploadRouter = express.Router();
const upload = require('../controllers/multer-storage-cloudinary');
const { saveProduct, getProducts } = require("../controllers/products.controller");

uploadRouter.post("/add-products",  upload.single('image'), async (req, res) => {
    try{
        console.log("Request received in backend")
        const {name, price} = req.body;
        const file = req.file;
        console.log(name, price, file);
        saveProduct(res, name, price, file);
    }
    catch(error){
        console.error(error);
    }
});

uploadRouter.get("/images", (req, res) =>{
    getProducts(res)
})

module.exports = uploadRouter;