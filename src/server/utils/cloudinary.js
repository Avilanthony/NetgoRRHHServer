const cloudinary  = require ('cloudinary').v2;
/* const { Sequelize } = require("sequelize"); */


const {
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
}=process.env;

/* module.exports = rrhhNetgo; */

cloudinary.config({
    cloud_name:CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true
});


/* export async function uploadFile(filePath) {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'rrhhNetgoIMG'
    });
} */

const uploadFile = async (filePath) =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'rrhhNetgoIMG'
    });
}

module.exports = {uploadFile};