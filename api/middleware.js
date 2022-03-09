import multer from 'multer';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});
var upload = multer({ storage: storage });

export default upload;