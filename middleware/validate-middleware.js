const validate=(schema)=>async(req,res,next)=>{
    try {
          const parseBody =await schema.parseAsync(req.body)
          req.body=parseBody
          next();
    } catch (error) {
        // const message=err.errors[0].message
        console.log(error);
        res.status(400).json({msg:"Validation Failed"})
        
    }
    }
    
    module.exports=validate