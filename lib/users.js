var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');

var enumeratedStates = ['AL AK AS AZ AR CA CO CT DE DC FM FL',
  'GA GU HI ID IL IN IA KS KY LA ME MH MD MA MI MN MS MO MT',
  'NE NV NH NJ NM NY NC ND MP OH OK OR PW PA PR RI SC SD TN TX',
  'UT VT VI VA WA WV WI WY'
].join(' ').split(' ');

var addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  secondStreet: String,
  city: {
    type: String,
    // required: true
  },
  state: {
    type: String,
    // required: true,
    enum: {
      values: enumeratedStates
    }
  },
  zipCode: {
    type: String,
    // required: true,
    match: /^\d{5}?$/
  }
});

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  username: {
    type: String,
    // required: true
  },
  phoneNumber: {
    type: String,
    // required: true,
    match: /(\d?\D*\d{3}\D*\d{3}\D*\d{4})/
  },
  address: [addressSchema],
  emailAddress: {
    type: String,
    // required: true,
    match: /\S+@\S+\.\S+/
  },
  stripeID: {
    type: String
    // required: true
  },
  currentDeliveries: {
    type: Array,
    // required: true
  },
  pastDeliveries: {
    type: Array,
    // required: true
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
