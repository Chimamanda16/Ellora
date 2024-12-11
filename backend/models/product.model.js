let mongoose = require("mongoose");

// MongoDB Schema
const imageSchema = new mongoose.Schema({
    url: String,        // Cloudinary URL
    publicId: String,   // Cloudinary public ID (for deletion)
    filename: String,   // Original filename
    uploadDate: Date,   // Upload timestamp
});

module.exports = mongoose.model('Image', imageSchema);