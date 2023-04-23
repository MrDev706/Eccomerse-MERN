const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        
        phone: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user"
        },
        
        address: [{type: mongoose.Schema.Types.ObjectId, ref : "Address"}],
        


    }, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
