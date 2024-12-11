const express = require('express');
const mongoose = require('mongoose');
const upload = require('./multer-storage-cloudinary');

const app = express();

// Upload API
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const { path, filename } = req.file;

        // Save metadata to MongoDB
        const newImage = new Image({
            url: path,
            publicId: req.file.filename, // Cloudinary public ID
            filename,
            uploadDate: new Date(),
            tags: ['example', 'tag'],
        });
        await newImage.save();

        res.status(200).json({ message: 'Image uploaded successfully', url: path });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading image' });
    }
});
