const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI, ()=>console.log('MongoDB is connected'));

const app = express();

// app.get('/',(req,res)=>{
// 	res.send('Happy Fall Linda! Have a good day')
// });
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))