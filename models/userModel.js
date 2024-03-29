const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    is_online: {
        type: String,
        default: '0'
    },
    email: {
        type: String,
        required: true
    },
     
},
    { timestamps: true }
);

module.exports = mongoose.Model('User', userSchema);

