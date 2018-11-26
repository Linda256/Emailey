const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

//connect database
mongoose.connect(keys.mongoURI, ()=>console.log('MongoDB is connected'));

const app = express();

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,//last for 30 days
    keys:[keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.get('/',(req,res)=>{
// 	res.send('Happy Fall Linda! Have a good day')
// });
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))