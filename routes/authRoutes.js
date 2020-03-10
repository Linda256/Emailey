const passport = require('passport');
const express = require('express');


module.exports = app => {
  app.get('/auth/google',
      passport.authenticate('google',{
        scope:['profile','email']
      })
  );

  app.get('/auth/google/callback',passport.authenticate('google'),
    (req,res) => {
      console.log("req to google callback", req.session)
      res.redirect('/surveys');
    }
  );

  //http://localhost:5000/auth/google/callback?code=4%2FwwHx2SDntb74Fhz71Za6GtGVwdBGRKWYELIpbnlSF_PlQ0KBdLk3ngORccEih3w-gPa6OL_-49BIT6RzxWvZmgQ&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent#

  app.get('/api/current_user', (req,res)=>{
    console.log("req.session in authRoutes 1", req.session)
    //res.send(req.session);
    //console.log("req.user in authRoutes", req.user)
   res.send(req.user);
  });

  app.get('/api/logout', (req,res)=>{
    req.logout();
    //res.send(req.user);
    res.redirect('/');
  })

}
