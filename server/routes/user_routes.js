const router = require('express').Router(); 
const UserModel = require('../models/user_model')
const bcrypt = require('bcrypt');


router.get('/:userid', async(req, res)=>{ 
    const useruid = req.params.userid; 
    const foundUser = UserModel.findOne({email: email});
    if(!foundUser){ 
        res.json({success: false, error: 'user_not_found'});
        return;
    }
    res.json({success: true, data: foundUser});
})

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


router.post('/login',async(req, res)=>{
    const email = req.body.email; 
    const password = req.body.password; 
    
    const foundUser = UserModel.findOne({email: email});
    if(!foundUser){ 
        res.json({success: false, error: 'user_not_found'});
        return;
    }
    else{ 
        const correctPassword = await bcrypt.compare(password, foundUser.password); 
        if(!correctPassword){ 
            res.json({success: false, error:'incorrect_password'});
            return;
        }
        res.json({success: true, data: foundUser});
    }

})

module.exports = router; 
