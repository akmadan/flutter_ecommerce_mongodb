const mongoose = require('mongoose');

const User = mongoose.Schema({ 
    'uid':{'type':String, 'unique':true},
    'name': { 
        'type': String, 
        'required': true, 

    }, 
    'address':{'type':String}, 
    'country':{'type':String}, 
    'city':{'type':String},
    'pincode':{'type':String}, 

    'addedon':{'type':Date, 'default':Date.now}

});

const userModel = mongoose.model('User', User); 

module.exports = userModel; 