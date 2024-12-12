const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary-config');

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        allowed_formats: ['jpg', 'png', 'jpeg'], // File formats
    },
});

const upload = multer({ storage });

module.exports = upload;