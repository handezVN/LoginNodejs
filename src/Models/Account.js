const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Account = new Schema({
    email: {type: String, maxLength: 255 , required: true, unique: true },
    fullname: {type: String },
    address: {type:String },
    password:{type:String ,required: true,},
    slug: { type: String, slug: 'email', unique: true },
  },{
    timestamps:true
  });


  module.exports = mongoose.model('Account',Account);