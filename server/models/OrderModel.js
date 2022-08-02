const mongoose=require('mongoose');
const orderSchema = require('../schemas/OrderSchema');
const Product = mongoose.model('order',orderSchema);
module.exports=Product