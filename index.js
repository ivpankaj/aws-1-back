import express from 'express';

const app = express();

app.use(async(req,res)=>{
    res.send('Welcome , this is the first time i have deployed backend , and ofcourse the software developer is none other than pankaj')
})
app.listen(8000,(req,res)=>{
 
    console.log('Server is running on port 8000');
})