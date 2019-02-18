let mongoose = require('mongoose');

let Schema = mongoose.Schema;

//skapa ett schema
let eventSchema = new Schema({
  code: {
    type: String,
    require: [true, 'No code found']
  },
  name: {
    type: String,
    require: [true, 'Name the event']
  },
  price: {
    type: Number,
    require: [true, 'pricetag required']
  },
  when: {
    year: {
      type: String,
      require: [true, 'pick a date']
    },
    date: {
      type: String,
      require: [true, 'pick a date']
    },
    from: {
      type: String,
      require: [true, 'starttime']
    },
    to: {
      type: String,
      require: true
    }
  }

});

//skapa en modell baserat på schemat
let Event = mongoose.model('events', eventSchema);

module.exports = Event;
