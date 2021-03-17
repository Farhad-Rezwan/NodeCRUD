const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const eventSchema = require('../apiSchema/eventSchema')

// base path = /api/v1/event
router.post('/', 
    joiSchemaValidation.validateBody(eventSchema.createEventSchema), 
    eventController.postEvent
);

router.get('/', 
    joiSchemaValidation.validateQueryParams(eventSchema.getrAllEventSchema),
    eventController.getAllEvents
);

router.get('/:id', 
    eventController.getEventById
);

router.put('/:id', 
    joiSchemaValidation.validateBody(eventSchema.updateEventSchema),
    eventController.updateEventById
);

router.delete('/:id', 
    eventController.deleteEventById
);

module.exports = router;