var mongoose = require('mongoose');
var autopopulate = require('mongoose-autopopulate');

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

//Delivery schema
var deliverySchema = new mongoose.Schema({
  user: {
    type: String
  },
  locationA: {
    type: [addressSchema],
    // required: true
  },
  locationB: {
    type: [addressSchema],
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  postmatesProposal: {
    type: Object,
    // required: true
  },
  price: {
    type: Number,
    // required: true
  },
  deliveryTime: {
    type: Number,
    // required: true
  },
  status: {
    type: String,
    // required: true
  }
});

var Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
