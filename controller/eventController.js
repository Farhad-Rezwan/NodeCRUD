const eventService = require('../service/eventService');
const constants = require('../constants');

module.exports.postEvent = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.postEvent(req.body);
        response.status = 200;
        response.message = constants.eventMessage.EVENT_CREATED;
        response.body = responseFromService.toObject();
    } catch (error) {
        console.log('Something went wrong: Controller: postEvent', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
}