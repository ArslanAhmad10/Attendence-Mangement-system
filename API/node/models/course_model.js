let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Data")

let CourseSchema = new mongoose.Schema({
    Id: {type: String, require:true, unique:true},
    CourseCode: String,
    Description: String 
})

module.exports = mongoose.model('Course',CourseSchema)