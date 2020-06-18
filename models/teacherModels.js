const {Schema,model} = require("mongoose")

const schema = new Schema({
    LastName: {
        type: String,
        required: true
    },
    FirstName:{
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Post:{
        type: String,
        required: true
    },
    Specialization:{
        type: String,
        required: true
    }
})

module.exports = model("teacher",schema)