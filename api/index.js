import express from 'express';
import bodyParser from 'body-parser';
import post from './routes/post.js';
import user from './routes/user.js';
import cors from 'cors';

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use('/user',user);
app.use('/post',post);

const PORT = process.env.PORT || 3001;

app.get('/',(req,res)=>{
  res.send("Insta Clone API");
});

app.listen(PORT,()=>{
  console.log("Server is started");
});
