import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import express from 'express';


const app = express();
const port = process.env.PORT || 3001;

console.log(`Current env is ${process.env.NODE_ENV}`);
console.log(config); 

app.use("/",require('./controller'))
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


