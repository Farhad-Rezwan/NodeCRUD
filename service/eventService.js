const Event = require('../database/models/eventModel')

module.exports.postEvent = async (serviceData) => {
    try {
        let event = new Event({ ...serviceData });
        let result = await event.save();
        return result;
    } catch(error) {
        console.log('Something went wrng: Service: postEvent', error);
        throw new Error(error);
    }
}