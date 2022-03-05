import express from 'express';
import { createUser,getProfile } from '../apiCalls.js';

const router = express.Router();

router.post('/createUser', (req, res) => {
  const body = req.body;

  createUser(body.firstName, body.lastName, body.username).then((data) => {
    res.json(data);
    console.log(data);
  });
});

router.get('/getprofile', (req, res) => {
  const user = req.query.user;
  getProfile(user).then((data)=>{
    res.json(data);
  });
});

export default router;