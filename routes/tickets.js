//Tickets route for Wher it's at app

//models
let Ticket = require('../models/ticket');
const Event = require('../models/event');

//GET  Sparar den i DB
module.exports.get = async (req, res) => {
  try {
    res.status(200).send(await Ticket.find({}));
  } catch (err) {
    res.status(500).send(err.stack);
  }
}

//POST
module.exports.post = async (req, res) => {
  try {

    //finns biljetter får min beställning plats?
    //Uppdatera event med sålda biljetter

    //get event info
    let event = await Event.findById(req.body.event);

    if (event.tickets.available >= (event.tickets.sold + req.body.amount)) {
      //Finns biljetter kvar
      console.info('Tickets are available!');

      //uppdatera event > sold ticketbo
      let newSold = event.tickets.sold + req.body.amount;

      await Event.findOneAndUpdate({
        _id: req.body.event
      }, {
        tickets: {
          sold: newSold,
          available: event.tickets.available
        }
      })

      //create ticket
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

    } else {
      // inte kvar
      console.info('Sorry, all tickets are sold');
      res.status(200).send('Sorry, no tickets left')
    }
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
