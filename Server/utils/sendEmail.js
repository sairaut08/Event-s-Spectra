const nodemailer = require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = '992511193324-172vsgc76p33iiba773daqsudbk75c5u.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04wxu4BtzbYq8CgYIARAAGAQSNwF-L9IrNB9fHrwe_onWwEcyTaKEAPmkBujYHEwGzy3HxgU-aOxnMKX8pAs7gdw1evmufj9NWK4'


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})


async function sendMail(email,subject,message) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                type : 'OAUTH2',
                user : 'eventspectra7781@gmail.com',
                clientId : CLIENT_ID,
                clientSecret : CLIENT_SECRET,
                refreshToken : REFRESH_TOKEN,
                accessToken : accessToken
            }
        })

        const mailOptions = {
            from : `EVENTSPECTRA 📧 <eventspectra7781@gmail.com>`,

            to : email,

            subject : subject,

            
            html : message


        };

        const result = await transport.sendMail(mailOptions);

        return result

    } catch (error) {
        return error
    }
}

module.exports = sendMail