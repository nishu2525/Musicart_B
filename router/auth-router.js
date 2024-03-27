const express=require("express");
const {home,register,login} =require('../controllers/auth-controllers')
const router = express.Router();


const RegisterSchema  = require('../Validators/auth-validator')
const validate =require('../middleware/validate-middleware')

router.route('/').get(home)
router.route('/register').post
// (validate(RegisterSchema),
(register)
router.route('/login').post(login)

module.exports=router;