const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartnershipSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    firm: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    district: {
        type: String
    },
    officeSpace: {
        type: Number,
    },
    noOfEmployees: {
        type: Number,
        required: true
    },
    briefReport: {
        type: String
    },
    expects: {
        type: String
    },
    promoters: {
        type: String
    }
});

const Partnership = mongoose.model("partnership", PartnershipSchema);
module.exports = Partnership;