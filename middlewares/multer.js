const multer = require("multer");
const path = require("path");

const documentsStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/documents"));
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "portofolio") {
      cb(null, "portofolio-" + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "resume") {
      cb(null, "resume-" + Date.now() + path.extname(file.originalname));
    } else {
      cb(null, "documents-" + Date.now() + path.extname(file.originalname));
    }
  },
});

const documentsImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "portofolio" || file.fieldname == "resume") {
      cb(null, path.join(__dirname, "../public/documents"));
    } else {
      cb(null, path.join(__dirname, "../public/images"));
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "portofolio") {
      cb(null, "portofolio-" + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "resume") {
      cb(null, "resume-" + Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === "image") {
      cb(null, "image-" + Date.now() + path.extname(file.originalname));
    }
  },
});

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "image") {
      cb(null, "image-" + Date.now() + path.extname(file.originalname));
    } else {
      cb(null, "unknown-" + Date.now() + path.extname(file.originalname));
    }
  },
});

const documentsUpload = multer({ storage: documentsStorage });
const imageUpload = multer({ storage: imageStorage });
const documentsImageUpload = multer({ storage: documentsImageStorage });

module.exports = {
  documentsUpload,
  imageUpload,
  documentsImageUpload
};
