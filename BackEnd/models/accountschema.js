let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TransactionSchema = new Schema({
    type: { type: String, enum: ['DEPOSIT', 'DRAFT', 'TRANSFER'], required: true },
    value: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    transferAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
    created_at: { type: String, required: true }
});

let AccountSchema = new Schema({
    number: { type: Number, required: true },
    agency: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    transactions: [TransactionSchema]
});

let Account = mongoose.model('Account', AccountSchema);
let Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = { Account, Transaction };