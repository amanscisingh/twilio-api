const http = require('http');
const express = require("express")
require('dotenv').config();
const VoiceResponse = require('twilio').twiml.VoiceResponse;

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
var subaccountSid = process.env.TWILIO_ACCOUNT_SUBACCOUNT_SID; // Your Subaccount SID from www.twilio.com/console

console.log(accountSid);

const client = require('twilio')(accountSid, authToken);


client.calls
      .create({
        twiml: '<Response><Say>Hi, this is Artificial Intelligence calling. This is to inform you that Aman loves you a lot! Aman Really loves you a lot! Never leave him!</Say></Response>',
         to: '+916370554202',
         from: '+15855480323'
       })
      .then(call => console.log(call));

      