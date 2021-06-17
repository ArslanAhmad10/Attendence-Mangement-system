let mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Data")

let StudentSchema = new mongoose.Schema({
    Id: {type: String, require:true, unique:true},
    RollNumber: String,
    name: String,
    SectionId: String,
    CIDS: String  
})

module.exports = mongoose.model('Course',StudentSchema)