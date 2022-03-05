import  express  from 'express';
import {createUser}  from '../apiCalls.js';

const router=express.Router();

router.post('/createUser',(req,res)=>{
  const body =req.body;
  
  createUser(body.firstName,body.lastName,body.username).then((data)=>{
    res.json(data);
    console.log(data);
  });
});

export default router;