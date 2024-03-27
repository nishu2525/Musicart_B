require("dotenv").config()
const express=require("express");
const cors =require("cors")
const app=express();
const router =require('./router/auth-router');
const connectDB =require('./utils/db')

const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true
};
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/auth',router)
// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome To Server");
// })

const PORT=4000;


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running Successfully on ${PORT}`);
    }) 
})
