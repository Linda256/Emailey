const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys')

const app = express();

const PORT = process.env.PORT || 5000;

// app.get('/',(req,res)=>{
// 	res.send('Good Afternoon, Linda! Have a good day')
// });


passport.use(new GoogleStrategy({clientID:keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
  }, (accessToken)=>{
    console.log(accessToken)

  }));

app.listen(PORT,()=>console.log(`Server is running at port ${PORT}`))