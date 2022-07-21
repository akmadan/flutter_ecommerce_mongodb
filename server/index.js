const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user_routes')
const productRoutes = require('./routes/product_routes')
const categoryRoutes = require('./routes/category_routes')


// define app
const app = express(); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));


// mongo db
mongoose.connect('mongodb+srv://akshit:akshit12@cluster0.ljj6u0k.mongodb.net/?retryWrites=true&w=majority').then(()=>{ 
    console.log('MongoDB Connected');
    app.get('/', (req, res)=>{
        res.send('Hello World') 
    
    }); 
    app.use('/api/user', userRoutes);
    app.use('/api/product',productRoutes );
    app.use('/api/category', categoryRoutes);
})

// server is listening
app.listen(3000, ()=>{ 
    console.log('Server is listening');
});

