let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//skapa ett schema
let ticketSchema = new Schema({
  code: {
    type: String
  },
  event: Object,
  used: {
    type: Boolean,
    default: false
  }
});

//skapa en modell baserat på schemat
let Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;
