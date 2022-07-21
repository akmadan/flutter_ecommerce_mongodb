const mongoose = require('mongoose');

const Product = mongoose.Schema({ 
    productid:{ 
        type: String, 
        required: true, 
        unique: true
    }, 
    title:{ 
        type: String, 
        required: true
    }, 
    description:{ 
        type: String, 
        
    }, 
    styles:{ 
        type: Array, 
        default:[]
    }, 
    price: { 
        type: Number, 
        required: true
    }, 
    images:{ 
        type: Array, 
        default:[]
    }, 
    createdOn:{ 
        type:Date, 
        default:Date.now
    }
});

const ProductModel = new mongoose.model('Products', Product);

module.exports = ProductModel;