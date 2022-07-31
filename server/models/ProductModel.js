const mongoose=require('mongoose');
const productSchema = require('../schemas/ProductSchema');
const Product = mongoose.model('product',productSchema);
module.exports=Product