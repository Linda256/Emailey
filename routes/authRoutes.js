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
      res.redirect('/surveys');
    }
  );

  app.get('/api/current_user', (req,res)=>{
    //res.send(req.session);
    console.log("req.user in authRoutes", req.user)
    res.send(req.user);
  });

  app.get('/api/logout', (req,res)=>{
    req.logout();
    //res.send(req.user);
    res.redirect('/');
  })

}
