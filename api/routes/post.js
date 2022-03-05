import  express  from 'express';
import {creatUser} from '../apiCalls';

const router=express.Router();

router.post('/createUser',(req,res)=>{
  const body =req.body;

  creatUser(body.firstname,body.lastname,body.username).then((data)=>{
    res.json(data);
  });
});