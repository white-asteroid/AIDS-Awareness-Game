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
    game1:{
        type:Number,
        default: -1,
    },
    game2:{
        type:Number,
        default: -1,
    },
    game3:{
        type:Number,
        default: -1,
    },
    
    date: {
        type: Date,
        default: Date.now
    },
    about: {},
    photo : String, 


},{ timestamp:true }
);
module.exports= user = mongoose.model("users", UserSchema);
// export default mongoose.model("users", UserSchema);