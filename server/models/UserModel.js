const mongoose=require('mongoose');
const userSchema = require('../schemas/UserSchema');
const User = mongoose.model('user',userSchema);
module.exports=User