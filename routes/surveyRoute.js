const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits')
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');


module.exports = app =>{
 app.post('/api/surveys',requireLogin, requireCredits,(req,res) =>{
  //is the user logged in
  // does the user have enough credit for sending email
  const { title, subject, body,recipients } = req.body;

  const survey = new Survery({
    title: title,
    body: body,
    subject: subject,
    recipients: recipients.split(',').map(email=> ({email:email.trim()})),
    _user:req.user.id,
    dateSent:Date.now()
  })

  const mailer = new Mailer(survey,surveyTemplate(survey));
  mailer.send();
 })
}