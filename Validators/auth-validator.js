const {z} =require('zod')

const RegisterSchema =z.object({
    name:z.string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name must be atleast 3 char"})
    .max(50,{message:"Name must not exced 50"}),

    phone:z.string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message:"Number must be atleast 10 char"})
    .max(12,{message:"Number must not exced 12"}),
    
    email:z.string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email "})
    .min(3,{message:"Name must be atleast 3 char"})
    .max(50,{message:"Name must not exced 50"}),
   
    password:z.string({required_error:"Email is Required"})
    .min(5,{message:"Number must be atleast 5 char"})
    .max(20,{message:"Number must not exced 20"}),
}) 

module.expor=RegisterSchema