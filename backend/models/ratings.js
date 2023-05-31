const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type : String
  },
  max_rating : {
      type : Number,
      default : 5
  },
  rating_obtained : {
      type : Number
  },
  created_on : {
      type : Date,
      default: Date.now()
  }
});

module.exports = mongoose.model('Rating', RatingSchema);