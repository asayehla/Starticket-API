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
  },
  info: {
    type: String
  },
  where: {
    adress: {
    type: String,
    require: [true, 'adress']
    },
    venue: {
      type: String,
      require: true
    }
  },
  tickets: {
    available: {
      type: Number
    },
    sold: {
      type: Number
    }
  }
});

//skapa en modell baserat på schemat
let Event = mongoose.model('event', eventSchema);

module.exports = Event;
