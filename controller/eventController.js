const eventService = require('../service/eventService');
const constants = require('../constants');

module.exports.postEvent = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.postEvent(req.body);
        response.status = 200;
        response.message = constants.eventMessage.EVENT_CREATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controller: postEvent', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
};

module.exports.getAllEvents = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.getAllEvents(req.query);
        response.status = 200;
        response.message = constants.eventMessage.EVENT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controler: getAllEvents', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
};


module.exports.getEventById = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.getEventById(req.params);
        response.status = 200;
        response.message = constants.eventMessage.EVENT_FETCHED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controler: getEventById', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
};

module.exports.updateEventById = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.updateEventById({
            id: req.params.id,
            updatedEvent: req.body
        });
        response.status = 200;
        response.message = constants.eventMessage.EVENT_UPDATED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controler: updateEventById', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
};

module.exports.deleteEventById = async (req, res) => {
    var response = { ...constants.defaultServerResponse };
    
    try {
        const responseFromService = await eventService.deleteEventById(req.params);
        response.status = 200;
        response.message = constants.eventMessage.EVENT_DELETED;
        response.body = responseFromService;
    } catch (error) {
        console.log('Something went wrong: Controler: deleteEventById', error);
        response.status = 400;
        response.message = error.message;
        response.body = {};
    }
    
    return res.status(response.status).send(response);
};