//EVENTS

//model
let Event = require('../models/event');

//GET
module.exports.get = async (req, res) => {

 try {
   res.status(200).send(await Event.find({}));

 } catch (err) {
   res.status(500).send(err.stack);
 }


}
//POST
module.exports.post = async (req, res) => {
  try {
    res.status(200).send(await Events.create(req.body));
  }
  catch (err) {
    res.status(500).send(err.stack);
  }

}
