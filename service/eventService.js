const constants = require('../constants');
const Event = require('../database/models/eventModel')
const { checkEventId } = require('../helper/dbHelper')

module.exports.postEvent = async (serviceData) => {
    try {
        let event = new Event({ ...serviceData });
        let result = await event.save();
        return result.toObject();
    } catch(error) {
        console.log('Something went wrng: Service: postEvent', error);
        throw new Error(error);
    }
}

// TODO: skip and limit impleemnt - fetch data with pagination
module.exports.getAllEvents = async () => {
    try {
        let events = await Event.find({});
        
        // TODO: didnot implement toObject()
        return events;
    } catch(error) {
        console.log('Something went wrong: Service: getAllEvents', error);
        throw new Error(error);
    }
}


module.exports.getEventById = async ({ id }) => {
    try {
        checkEventId(id);
        let event = await Event.findById(id);
        
        if (!event) {
            throw new Error(constants.eventMessage.EVENT_NOT_FOUND);
        }
        
        // TODO: didnot implement toObject()
        return event;
    } catch(error) {
        console.log('Something went wrong: Service: getEventById', error);
        throw new Error(error);
    }
}

module.exports.updateEventById = async ({ id, updatedEvent }) => {
    try {
        checkEventId(id);
        let event = await Event.findOneAndUpdate(
            {_id: id},
            updatedEvent,
            {new: true}
        );
        
        if (!event) {
            throw new Error(constants.eventMessage.EVENT_NOT_FOUND);
        };
        
        // TODO: didnot implement toObject()
        return event;
    } catch(error) {
        console.log('Something went wrong: Service: updateEventById', error);
        throw new Error(error);
    }
}

module.exports.deleteEventById = async ({ id }) => {
    try {
        checkEventId(id);
        let event = await Event.findByIdAndDelete(id);
        
        if (!event) {
            throw new Error(constants.eventMessage.EVENT_NOT_FOUND);
        };
        
        // TODO: didnot implement toObject()
        return event;
    } catch(error) {
        console.log('Something went wrong: Service: deleteEventById', error);
        throw new Error(error);
    }
}