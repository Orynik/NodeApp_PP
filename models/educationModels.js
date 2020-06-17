const {Schema,model} = require("mongoose")

const schema = new Schema({
    NameOfEducation: {
        type: String,
    },
    Price: {
        type: Number,
    },
})

module.exports = model("education",schema)