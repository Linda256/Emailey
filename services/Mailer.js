const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients}, content){
    super();

    this.sgApi=sendgrid(keys.sendGridKey);
    this.from_email = new help.Email('no-reply@eamily.com');
    this.subject = subject;
    this.body = new help.Content('text/html',content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients){
    return recipients.map ( ({email}) =>{
      return new help.Email(email);
    })
  }

  addClickTracking() {
    const trackingSettings  = new helper.trackingSettings();
    const clickTracking = new helper.clickTracking(true,true);

    trackingSettings.setClickTracking(clickTracking);
    this.addClickTracking(trackingSettings);
  }

  addRecipients(){
    const personalize = new help.Personalization();

    this.recipients.forEach( recipient =>{
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send(){
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path:'/v3/mail/send',
      body:this.toJSON()
    });

  const response = this.sgApi.API(request);
  return response;
  }
}

module.exports=Mailer;