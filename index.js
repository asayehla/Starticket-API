const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const user = 'YOUR_USER';
const password ='YOUR_PASSWORD';

//connect to database
mongoose.connect(`mongodb+srv://bex:<PASSWORD>@cluster0-hl0ma.mongodb.net/test?retryWrites=true`, {
    useNewUrlParser: true
  })
  .then(() => {
    console.info('Connected.');
  })

  .catch(err => {
    console.error(err.stack);
    //stack talar om vilken fil som går fel.
  })

//routes
let events = require('./routes/events');
let tickets = require('./routes/tickets');
let verify = require('./routes/verify');

let app = express();

// encoda json data
app.use(express.json());
app.use(cors ()); //Develop

//bygga api
app.route('/events')
  .get(events.get)
  .post(events.post)

//bygga api
app.route('/tickets')
  .post(tickets.post)

//för mannen i dörren
app.route('/verify/:code')
.get(verify.get)

const PORT = 3000;
app.listen(3000, () => {
  console.info(`API körs på port: ${PORT}.`);
})
//
//app.listen(process.env.PORT|| 3000, ()=>{
