const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({ name: 'string' });

const eventSchema = new mongoose.Schema({
    title: String,
    message: String,
    owner: ownerSchema
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            delete ret.__v;
            delete ret.owner._id
            return ret;
        }
    }
});

module.exports = mongoose.model('Event', eventSchema);