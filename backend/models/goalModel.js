const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
        //true means that test is required and if the document is saved w/o
        //the test field string then mongoose will throw an error
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema);