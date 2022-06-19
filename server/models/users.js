const mongoose= require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true, 
        unique: true,
    },
    password:{
        type: String,
        required: true, 
        min:6,
        max:64,
    },
    // avatar:{
    //     type: String
    // },
    date: {
        type: Date,
        default: Date.now
    },
    about: {},
    photo : String, 


},{ timestamp:true }
);
// module.exports= User = mongoose.model("users", UserSchema);
export default mongoose.model("users", UserSchema);