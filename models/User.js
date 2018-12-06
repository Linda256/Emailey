const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  userCredit:Number
});

mongoose.model('users', userSchema);
