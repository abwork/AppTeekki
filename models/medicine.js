const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const MedicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // general_information: {
    //     type: String,
    //     // required: true
    // },
    // side_effects: {
    //     type: String,
    //     // required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = Medicine = mongoose.model('medicine', MedicineSchema);