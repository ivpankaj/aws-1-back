import express from 'express';

const app = express();

app.use(async(req,res)=>{
    res.send('Welcome')
})
app.listen(8000,(req,res)=>{
 
    console.log('Server is running on port 8000');
})