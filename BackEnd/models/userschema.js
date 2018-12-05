const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

let UserSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['Física', 'Jurídica'] },
    document: { 
        type: String, 
        required: true,
        unique: true,
        match: /^\d+$/,
    }, // CPF
    address: {
        street: { type: String, required: true },
        number: { type: Number, required: true },
        complement: String,
        zipcode: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 8,
            match: /^\d+$/,
        },
        neighborhood: { type: String, required: true },
        city: { type: String, required: true }
    },
    email: { 
        type: String, 
        required: true,  
    },
    phone: { 
        type: String, 
        required: true,
        match: /^\d+$/,
    },
    accounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
    password: { type: String, required: true, minlength: 6, select: false }
});

const hashPass = function(next){
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
} 

UserSchema.pre('save', hashPass);

UserSchema.pre('findOneAndUpdate', function(next) {
    const password = this.getUpdate().$set.password;
    if(!password)
        return next();
    
    let pass = hashPass(password);
    if(pass instanceof Error) return next(pass);
    
    this.getUpdate().$set.password = pass;
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;