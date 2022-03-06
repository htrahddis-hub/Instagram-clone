import  express  from 'express';
import multer from 'multer';
import {createPost} from '../apiCalls.js';

const router=express.Router();

var storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'public')
  },
  filename: (req,file,cb)=>{
    cb(null, Date.now()+"-"+file.originalname )
  }
});
var upload = multer({storage: storage});

router.post('/createPost',upload.single('file'),(req,res)=>{
  const body =req.body;

  createPost(body.user,body.caption,req.file).then((data)=>{
    console.log(data);
    res.json(data);
  });
});

export default router;