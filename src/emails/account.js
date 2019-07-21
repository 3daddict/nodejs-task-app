const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = "";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'info@msalvati.com',
    from: 'info@msalvati.com',
    subject: 'This is my first sendGrid email',
    text: 'I hope this emails finds you...'
})