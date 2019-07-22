const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@msalvati.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along`
    })
};

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@msalvati.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Was there something we can improve on or a feature we can add? Reply to this message and tell us what you think.`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}