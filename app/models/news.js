var mongoose = require('mongoose');
var Schema = mongoose.Schema ;
// FormatDate = mongoose.Schema.Types.FormatDate = require('mongoose-schema-formatdate'); 

var newsSchema = new Schema({
         newsTitle : { type : String , unique : true , required : true },
         newsDate : { type : Date },
         place : { type : String },
         article : { type : String , required : true  },
         newsImages : [{ path : String , imageDes : String }] ,
         sponsers : [String]
 })

module.exports = mongoose.model('News' , newsSchema);


