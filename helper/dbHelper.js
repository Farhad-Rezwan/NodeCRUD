const constants = require('../constants')
const mongoose = require('mongoose')

module.exports.checkEventId = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
}