require('dotenv').config();
const http = require('http');
const path = require('path');
const express = require("express")
const VoiceResponse = require('twilio').twiml.VoiceResponse;

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
var subaccountSid = process.env.TWILIO_ACCOUNT_SUBACCOUNT_SID; // Your Subaccount SID from www.twilio.com/console

console.log(accountSid);

const client = require('twilio')(accountSid, authToken);

// adding a comment

const app = express();

app.get('/', (req, res) => {
    // const twiml = new VoiceResponse();
    // twiml.say("Hi, this is Artificial Intelligence calling. This is to inform you that Aman loves you a lot!");
    res.set({  
        'Content-Type': 'text/xml'
      });  
    // res.status(200).send(twiml.toString());
    const options = {
        root: path.join(__dirname)
    };
    res.sendFile('sample.xml', options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:');
        }
    });
    // console.log(res);
})


app.listen(process.env.PORT, ()=> {
    console.log(`Server is running at port ${process.env.PORT}`);
})

// http
//   .createServer((req, res) => {
//     // Create TwiML response
//     const twiml = new VoiceResponse();

//     twiml.say('Hi, this is Artificial Intelligence calling. This is to inform you that Aman loves you a lot!');

//     res.writeHead(200, { 'Content-Type': 'text/xml' });
//     res.end(twiml.toString());
//   })
//   .listen(1337, '127.0.0.1');


// client.calls
//       .create({
//          url: 'http://demo.twilio.com/docs/voice.xml',
//          to: '+918738839613',
//          from: '+15855480323'
//        })
//       .then(call => console.log(call));

      