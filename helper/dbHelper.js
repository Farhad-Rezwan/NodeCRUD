const constants = require('../constants')
const mongoose = require('mongoose')

// checks for mongo objectId type and returns predefined message
module.exports.checkEventId = (id) => {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(constants.databaseMessage.INVALID_ID);
    }
}

// format mongo data as per specified in models/toObject -> return events for front-end.
module.exports.formatEventData = (data) => {
    let eventList = []
    if (Array.isArray(data)) {
        for (value of data) {
            eventList.push(value.toObject())
        }
        return eventList;
    }
    return data.toObject()
}