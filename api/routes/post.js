import express from 'express';
import multer from 'multer';
import { createPost, getAllPosts, getPostsOfFollowing, getPosts } from '../apiCalls.js';

const router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
});
var upload = multer({ storage: storage });

router.post('/createPost', upload.single('file'), (req, res) => {
  const body = req.body;

  createPost(body.user, body.caption, req.file).then((data) => {
    console.log(data);
    res.json(data);
  });
});

router.get('/getPostOfFollowing', (req, res) => {
  const user = req.query.user;
  getPostsOfFollowing(user).then((data) => {
    var posts = data[0].following;
    if (posts == null)
      res.json([]);
    else {
      posts = posts.map((post) => post.posts);
      posts = posts.flat(1);
      res.json(posts);
    }
  })
    .catch((err) => {
      res.json([]);
      console.log(err);
    });
});

router.get('/getAllPosts', (req, res) => {
  getAllPosts().then((data) => res.json(data));
});

router.get("/getPosts", (req, res) => {
  const user = req.query.user;
  getPosts(user).then((data) => res.json(data));
})

export default router;