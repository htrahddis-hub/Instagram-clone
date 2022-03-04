import express from 'express';
import bodyParser from 'body-parser';

const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
  console.log("Server is started");
});
