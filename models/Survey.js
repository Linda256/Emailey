const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
  title:{
    type:String,
    require: true
  },
  subject:{
    type:String,
    require: true
  },
  body:{
    type:String,
    require: true
  },
  recipients:[RecipientSchema],
  yes:{
    type: Number,
    default:0
  },
  no:{
    type: Number,
    default:0
  },
  _user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  dateSent: Date,
  lastResponded:Date
})

mongoose.module.export('surveys', surveySchema);