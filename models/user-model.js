const mongoose = require("mongoose");
const jwt =require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number, 
    require: true 
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  }
});

userSchema.methods.generateToken = function (){
  try {
    return jwt.sign({
      userId :this._id.toString(),
      email:this.email,
      phone:this.phone},
      process.env.JWT_KEY,{ expiresIn:'30d'})
  } catch (error) {
    console.error(error)
  }
}

const User = new mongoose.model("User",userSchema)
module.exports=User;