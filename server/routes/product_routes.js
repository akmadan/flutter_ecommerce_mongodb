const router = require('express').Router(); 
const ProductModel = require('../models/user_model')
const bcrypt = require('bcrypt');

router.post('/add_product', async(req, res)=>{ 
    const product_data = req.body; 
    const newProduct = ProductModel(product_data);
    await newProduct.save((err)=>{ 
        if(err){ 
            res.json({success:false, error: err})
        }
        res.json({success:true, data: newProduct});
    });

});
module.exports = router; 
