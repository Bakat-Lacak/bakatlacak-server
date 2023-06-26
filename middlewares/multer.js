const multer = require('multer');
const path = require('path');

const portfolioStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/portfolio'));
    },
    filename: function(req, file, cb){
        cb(null, 'portfolio-' + Date.now() + path.extname(file.originalname));
    }
});

const porfolioFileFilter = multer({
    storage: portfolioStorage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname);
        if(ext !== '.pdf'){
            return cb(new Error('Only pdf file is allowed'));
        }
        cb(null, true);
    }
});

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function(req, file, cb){
        cb(null, 'image-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFileFilter = multer({
    storage: imageStorage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname);
        if(ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png'){
            return cb(new Error('Only jpg, jpeg, and png file is allowed'));
        }
        cb(null, true);
    }
});

const portfolioUpload = multer({ storage: portfolioStorage, fileFilter: porfolioFileFilter });
const imageUpload = multer({ storage: imageStorage, fileFilter: imageFileFilter });

module.exports = {
    portfolioUpload,
    imageUpload
};