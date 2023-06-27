const multer = require('multer');
const path = require('path');

const documentsStorage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/documents'));
    },
    filename: function(req, file, cb){
        if(file.fieldname === 'portofolio'){
            cb(null, 'portofolio-' + Date.now() + path.extname(file.originalname));
        } else if(file.fieldname === 'resume'){
            cb(null, 'resume-' + Date.now() + path.extname(file.originalname));
        } else {
            cb(null, 'documents-' + Date.now() + path.extname(file.originalname));
        }
    }
});

const documentsFileFilter = multer({
    storage: documentsStorage,
    fileFilter: function(req, file, cb){
        const ext = path.extname(file.originalname);
        if(ext !== '.pdf'){
            return cb(new Error('Only pdf file is allowed'));
        }
        cb(null, true);
    },
    limits: {
        fileSize: 1024 * 1024 * 5
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
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

const documentsUpload = multer({ storage: documentsStorage, fileFilter: documentsFileFilter });
const imageUpload = multer({ storage: imageStorage, fileFilter: imageFileFilter });

module.exports = {
    documentsUpload,
    imageUpload
};