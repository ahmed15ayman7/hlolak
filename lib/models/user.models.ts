import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type:'string'},
    type:{type:'string',default:'client'},
    name: {type:'string'},
    phone: {type:'string' },
    email: {type:'string', required: true},
    password:{type:'string', required: true},
    image: {type:'string'},
    onboarding: {type: 'boolean', default: false},
    services:[
      { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
    ],
    updatedAt: {
        type: Date,
        default: Date.now,
      },
 });
 const User = mongoose.models?.User || mongoose.model('User', userSchema);
 export default User;