const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    zipCode: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String, required: false },
    district: { type: String, required: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
});

module.exports = Address = mongoose.model('Address', AddressSchema);