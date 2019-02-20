//Tickets route for Wher it's at app

//models
let Ticket = require('../models/ticket');
const Event = require('../models/event');

//GET  Sparar den i DB
module.exports.get = async (req, res) => {
  try {
    let tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch (err) {
    res.status(500).send(err.stack);
  }
}

//POST
module.exports.post = async (req, res) => {

  try {
    //get event info
    let event = await Event.findById(req.body.event);

    let tickets = [];

    for (i = 0; i < req.body.amount; i++) {

      let ticket = {
        event: event,
        code: uid(5),
        used: false
      }

      tickets.push(ticket);
    }
    console.log(tickets);

    //write tickets to mongo
    let resp = await Ticket.create(tickets);

    res.status(200).send(resp);
  } catch (err) {
    res.status(500).send(err.stack);
  }
};

//UID  codeGenerator
function uid(len) {

  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = [];

  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    code.push(chars[rand]);
  }

  //man kan bygga mer validering så man inte får samma kod.
  return code.join('');
}
