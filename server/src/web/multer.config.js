const multer = require('multer');

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, process.env.IMAGE_PATH);
    },
    filename: (req, file, cb) => {
        const image = file.originalname.lastIndexOf('.')
        const extension = file.originalname.substring(image);
        cb(null, `some_avatar${(+new Date).toString(16) + extension}`);
    }
});

module.exports = storageConfig;

