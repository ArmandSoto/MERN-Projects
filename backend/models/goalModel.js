const mongoose = require('mongoose');

//we need to know what/which user created that goal
//when we create a new user they are assigned _id and we want the type to me equal to that
//hence the ObjectId
const goalSchema = mongoose.Schema({
    text: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        type: String,
        required: [true, 'Please add a text value']
        //true means that test is required and if the document is saved w/o
        //the test field string then mongoose will throw an error
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Goal', goalSchema);