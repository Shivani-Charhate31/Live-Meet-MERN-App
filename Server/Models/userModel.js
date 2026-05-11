import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import { Timestamp } from "mongodb";


const userSchema = new mongoose.Schema({

    name:
    {
        type: String,
        required: true,
        trim: true,
        maxlength: [40, 'Name cannot be more than 40 Char ']
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password:
    {
        type: String,
        required: true,
        minlength: [8, 'password should be at least 8 char'],
        select: false
    }
}, {
    timestamp: true
})

// hash password before save into DB

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    // password hashing
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})
// Compare password

userSchema.method.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
export default mongoose.model('user', userSchema)
