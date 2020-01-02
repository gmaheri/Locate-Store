const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId : {
    type : String,
    required : [true, 'Please enter store ID'],
    unique : true,
    trim : true,
    maxlength : [10, 'Store ID must be less than 10 characters!']
  },
  address : {
    type : String,
    required : [true, 'Please enter an address']
  },

  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index : '2dsphere'
    },
    formattedAddres : String
  },
  createdAt : {
    type : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('Storeloc', StoreSchema);
