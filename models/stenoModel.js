var mongoose = require('mongoose');
var stenoModel = new mongoose.Schema({
    name: String,
    model: {String},
    features: String,
    product_details: [{
      style: String,
      price: String
      }],
    user_sets_opinion: String,
    num_page_currently_loaded: Number,
});
module.exports = mongoose.model('stenoDb', stenoModel );
