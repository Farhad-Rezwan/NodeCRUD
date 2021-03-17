const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    message: String,
    owner: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            delete ret.__v;
            return ret;
        }
    }
});

module.exports = mongoose.model('Event', eventSchema);