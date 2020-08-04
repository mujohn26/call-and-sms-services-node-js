import response from "../helpers/response";
import dotenv from "dotenv";
const accountSid = "AC7b009499172a3cd532ab923a7ded0854";
dotenv.config();
const authToken = `${process.env.authToken}}`;
const client = require("twilio")(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;
class TwillioController {
  static async sendSms(req, res) {
    try {
      client.messages
        .create({
          body: "Hey this Mrs John who want to inform you good news",
          from: "+1 636 337 2864",
          to: "+250785571790",
        })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
          });
        });
    } catch (error) {
      return response.errorMessage(res, e.message, 500);
    }
  }
  static async makeCall(req, res) {
    client.calls.create({
      twiml: '<Response><Say>Ahoy, World!</Say></Response>',
      to: '+1 636 337 28642',
      from: '+250785571790'
    })
    try {
    } catch (error) {
      return response.errorMessage(res, e.message, 500);
    }
  }
}

export default TwillioController;
