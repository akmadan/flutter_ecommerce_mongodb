const router = require('express').Router(); 
const UserModel = require('../models/user_model')
const bcrypt = require('bcrypt');

router.post('/create_account',async (req, res)=>{ 
    const user_data = req.body(); 

    // encrypt password
    const password = user_data.password; 
    const salt = await bcrypt.genSalt(10); 
    const hashed_password = await bcrypt.hash(password, salt)
    user_data.password = hashed_password; 

    const new_user = new UserModel(user_data); 
    await new_user.save(function(err){ 
        if(err){ 
           res.json({success: false, error:err});
           return ; 
        }
        res.json({success:true, data: new_user});
    }); 

}); 

module.exports = router; 
