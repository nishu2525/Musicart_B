const mongoose= require("mongoose")
const URI= process.env.MONGODB_URI
// Ym96apg92dZWDWAX -password

// mongodb+srv://umapnishad1:Ym96apg92dZWDWAX@cluster0.xojtc9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connectDB= async()=>{
    try {
        await mongoose.connect(URI)
        console.log(" Database Connection Successful");
        
    } catch (error) {
        console.log(error);
        console.error("Database Connection Failed");
        process.exit(0)
    }
    };
    
    module.exports=connectDB;