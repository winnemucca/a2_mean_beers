const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let userSchema = new Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    password:{type: String, required: true},
    email:{type: String, required: true, unique:true}
    //messages: [{type: String, ref: 'Message'}] /* may add some messaging will check on time*/

});
userSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User',userSchema); //collection users