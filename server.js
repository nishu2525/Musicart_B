const express=require("express");
const app=express();
const router =require('./router/auth-router');
// const connectDB =require('./utils/db')

// app.use('/api/auth',router)

const PORT=4000;

app.listen(PORT,()=>{
        console.log(`Server is running Successfully on ${PORT}`);
    }) 
