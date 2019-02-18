//Tickets route for Wher it's at app

//models
let Ticket = require('../models/tickets');

//POST
module.exports.post = async (req, res, next) => {
  try {
    //hantera post
    let ticket = req.body;

    //generear en Code och sätter in nyckeln code i Code
    ticket.code = uid(5);

    //Skapar en instans av modellen Ticket
    //let newTicket = new Ticket(ticket); newTicket.save; //samma sak som : Ticket.create(ticket);
    let resp = await Ticket.create(ticket);
    console.log(resp);
    res.status(200).send(resp);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }

};
// Sparar den i DB
module.exports.get = async (req, res) => {
  try {
    let tickets = await Ticket.find({});
    res.status(200).send(tickets);
  } catch(err) {
    //console.log(err);
    res.status(500).send(err);
  }
}


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
