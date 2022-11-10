const mongoose = require("mongoose") 
const bakerySchema = mongoose.Schema({ 
 cakeCost: Number, 
 cookieCost: Number, 
 cooldrinkCost: Number 
}) 
 
module.exports = mongoose.model("Bakery", bakerySchema) 