const Ticket = require('../models/ticket');

//den gör att vi kan använda
module.exports.get = async (req, res) => {
  console.log(req.params)
  // let ticket = await Ticket.find({code: req.params.code});

  try {
    //verify code
    let resp = await Ticket.find({
      code: req.params.code
    }) // let ticket = await Ticket.find({ code: req.params.code })

    if (resp.length == 1) {
      //Valid ticket
      res.status(200).send('Ticket is valid.');

    } else {
      //NOT valid
      res.status(400).send('Ticket is NOT valid, get a real one, dude');
    }

  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }

}
