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
      res.send('Ticket is valid').status(200);

    } else {
      //NOT valid
      res.send('Ticket is NOT valid').status(406);
    }

  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }

}
