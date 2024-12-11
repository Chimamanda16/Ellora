const express = require('express');
const mongoose = require('mongoose');
const uploadRouter = express.Router();
const upload = require('../controllers/multer-storage-cloudinary');

// Upload API
// uploadRouter.post('/add-product', upload.single('file'), async (req, res) => {
//     try {
//         const { path, filename } = req.file;
//         console.log(path, filename);
//         console.log("Request received in the backend");
//         // Save metadata to MongoDB
//         // const newImage = new Image({
//         //     url: path,
//         //     publicId: req.file.filename, // Cloudinary public ID
//         //     filename,
//         //     uploadDate: new Date(),
//         //     tags: ['example', 'tag'],
//         // });
//         // await newImage.save();

//         // res.status(200).json({ message: 'Image uploaded successfully', url: path });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error uploading image' });
//     }
// });

uploadRouter.post("/add-products",  upload.single('image'), async (req, res) => {
    try{
        console.log(req.body);
    }
    catch(error){
        console.error(error);
    }
});

module.exports = uploadRouter;