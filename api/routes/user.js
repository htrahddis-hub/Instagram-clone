import express from 'express';
import upload from '../middleware.js';
import { createUser, getProfile, searchForUsername, updateProfile } from '../apiCalls.js';

const router = express.Router();

router.post('/createUser', (req, res) => {
  const body = req.body;

  createUser(body.firstName, body.lastName, body.username).then((data) => {
    res.json(data);
    console.log(data);
  });
});

router.get('/getProfile', (req, res) => {
  const user = req.query.user;
  getProfile(user).then((data) => {
    res.json(data);
  });
});

router.get('/searchForUsername', (req, res) => {
  const text = req.query.text;
  searchForUsername(text).then((data) => res.json(data));
});

router.post('/updateProfile', upload.single("file"), (req, res) => {
  const body = req.body;
  updateProfile(body.user, body.first_name, body.last_name, body.bio, req.file)
    .then((data) => res.json(data));
});

export default router;