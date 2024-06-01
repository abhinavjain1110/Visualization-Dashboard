const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const routes=require('./routes/routes.js')
const cors=require('cors')
const PORT=5000;

const app=express()
app.use(express.json({ limit: '50mb' }));
app.use(cors())
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/visualization")
        .then(e=> console.log("MongoDB Connected"));

app.use('/visual',routes);

app.listen(PORT,()=>{
    console.log(`Your server is running at http://localhost:${PORT}`);
});

